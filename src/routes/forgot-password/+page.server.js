import { fail } from '@sveltejs/kit';
import { auth } from '#lib/server/auth.js';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');

		if (!email) {
			return fail(400, { email, message: 'Please enter your email.' });
		}

		try {
			await auth.api.requestPasswordReset({ body: { email, redirectTo: '/reset-password' } });
		} catch (error) {
			return fail(400, { email, message: error.message });
		}

		return { sent: true };
	}
};
