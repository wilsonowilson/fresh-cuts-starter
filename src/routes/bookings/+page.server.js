import { desc, eq } from 'drizzle-orm';
import { db } from '#lib/server/db/index.js';
import { services, bookings } from '#lib/server/db/schema.js';

export async function load() {
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
		.orderBy(desc(bookings.id));

	return { bookings: rows };
}

export const actions = {
	cancel: async ({ request }) => {
		const formData = await request.formData();
		const id = Number(formData.get('id'));

		await db.update(bookings).set({ status: 'cancelled' }).where(eq(bookings.id, id));
	},

	delete: async ({ request }) => {
		const formData = await request.formData();
		const id = Number(formData.get('id'));

		// Never forget .where(): without it, every booking is deleted.
		await db.delete(bookings).where(eq(bookings.id, id));
	}
};
