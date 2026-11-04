import { bookings } from '#lib/server/bookings.js';

export function load() {
	return { bookings };
}

export const actions = {
	cancel: async ({ request }) => {
		const formData = await request.formData();
		const id = Number(formData.get('id'));

		const booking = bookings.find((item) => item.id === id);
		if (booking) {
			booking.status = 'cancelled';
		}
	}
};
