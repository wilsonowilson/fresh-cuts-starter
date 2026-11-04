import { fail, redirect } from '@sveltejs/kit';
import { db } from '#lib/server/db/index.js';
import { services, bookings } from '#lib/server/db/schema.js';
import { user } from '#lib/server/db/auth.schema.js';
import { days } from '#lib/content.js';

export async function load() {
	const list = await db.select().from(services).orderBy(services.id);
	const barbers = await db.select({ id: user.id, name: user.name }).from(user).orderBy(user.name);

	return { services: list, barbers, days };
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const values = {
			name: formData.get('name'),
			phone: formData.get('phone'),
			service: formData.get('service'),
			day: formData.get('day'),
			barber: formData.get('barber')
		};

		const errors = {};
		for (const field of ['name', 'phone', 'service', 'day', 'barber']) {
			if (!values[field]) {
				errors[field] = 'Please fill this in.';
			}
		}

		if (values.phone && values.phone.length < 11) {
			errors.phone = 'A phone number has 11 digits, like 0803 123 4567.';
		}

		const list = await db.select().from(services);
		const service = list.find((item) => item.id === Number(values.service));
		if (values.service && !service) {
			errors.service = 'Please choose a service from the list.';
		}

		if (values.day && !days.includes(values.day)) {
			errors.day = 'Please choose a day from the list.';
		}

		const barbers = await db.select({ id: user.id, name: user.name }).from(user);
		const barber = barbers.find((item) => item.id === values.barber);
		if (values.barber && !barber) {
			errors.barber = 'Please choose a barber from the list.';
		}

		if (errors.name || errors.phone || errors.service || errors.day || errors.barber) {
			return fail(400, { values, errors });
		}

		await db.insert(bookings).values({
			name: values.name,
			phone: values.phone,
			day: values.day,
			serviceId: service.id,
			userId: barber.id
		});

		redirect(303, '/book/thanks');
	}
};
