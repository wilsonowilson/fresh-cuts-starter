import { error, redirect } from '@sveltejs/kit';
import { desc, eq } from 'drizzle-orm';
import { db } from '#lib/server/db/index.js';
import { services, bookings } from '#lib/server/db/schema.js';

export async function load({ locals }) {
	if (!locals.user) {
		redirect(303, '/login');
	}

	const rows = await db
		.select({
			id: bookings.id,
			name: bookings.name,
			phone: bookings.phone,
			day: bookings.day,
			status: bookings.status,
			service: services.name
		})
		.from(bookings)
		.innerJoin(services, eq(bookings.serviceId, services.id))
		.where(eq(bookings.userId, locals.user.id))
		.orderBy(desc(bookings.id));

	return { bookings: rows };
}

// Who is asking? (401 if nobody.) May they change this booking? (403 if it is not theirs.)
async function findOwnBooking(request, user) {
	if (!user) {
		error(401, 'Please log in first.');
	}

	const formData = await request.formData();
	const rows = await db.select().from(bookings).where(eq(bookings.id, Number(formData.get('id'))));
	const booking = rows[0];

	if (!booking) {
		error(404, 'Booking not found');
	}
	if (booking.userId !== user.id) {
		error(403, 'This booking belongs to another barber.');
	}

	return booking;
}

export const actions = {
	cancel: async ({ request, locals }) => {
		const booking = await findOwnBooking(request, locals.user);

		await db.update(bookings).set({ status: 'cancelled' }).where(eq(bookings.id, booking.id));
	},

	delete: async ({ request, locals }) => {
		const booking = await findOwnBooking(request, locals.user);

		// Never forget .where(): without it, every booking is deleted.
		await db.delete(bookings).where(eq(bookings.id, booking.id));
	}
};
