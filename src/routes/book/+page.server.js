import { fail, redirect } from '@sveltejs/kit';
import { services, days } from '#lib/content.js';
import { bookings } from '#lib/server/bookings.js';

export function load() {
	return { services, days };
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const values = {
			name: formData.get('name'),
			phone: formData.get('phone'),
			service: formData.get('service'),
			day: formData.get('day')
		};

		const errors = {};
		for (const field of ['name', 'phone', 'service', 'day']) {
			if (!values[field]) {
				errors[field] = 'Please fill this in.';
			}
		}

		if (values.phone && values.phone.length < 11) {
			errors.phone = 'A phone number has 11 digits, like 0803 123 4567.';
		}

		const service = services.find((item) => item.id === Number(values.service));
		if (values.service && !service) {
			errors.service = 'Please choose a service from the list.';
		}

		if (values.day && !days.includes(values.day)) {
			errors.day = 'Please choose a day from the list.';
		}

		if (errors.name || errors.phone || errors.service || errors.day) {
			return fail(400, { values, errors });
		}

		bookings.push({
			id: bookings.length + 1,
			name: values.name,
			phone: values.phone,
			service: service.name,
			day: values.day,
			status: 'requested'
		});

		redirect(303, '/book/thanks');
	}
};
