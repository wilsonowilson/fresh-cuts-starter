import { fail } from '@sveltejs/kit';
import { services, days } from '#lib/content.js';

// Kept in the server's memory: lost when the server restarts.
const bookings = [];

export function load() {
	return {
		services,
		days,
		bookingCount: bookings.length
	};
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
			if (values[field].trim() === '') {
				errors[field] = 'Please fill this in.';
			}
		}

		if (errors.phone === undefined && values.phone.trim().length < 11) {
			errors.phone = 'A phone number has 11 digits, like 0803 123 4567.';
		}

		const service = services.find((item) => item.id === Number(values.service));
		if (errors.service === undefined && service === undefined) {
			errors.service = 'Please choose a service from the list.';
		}

		if (errors.day === undefined && days.includes(values.day) === false) {
			errors.day = 'Please choose a day from the list.';
		}

		if (Object.keys(errors).length > 0) {
			return fail(400, { values, errors });
		}

		bookings.push({
			name: values.name,
			phone: values.phone,
			service: service.name,
			day: values.day
		});

		return { success: true };
	}
};
