import { fail, redirect } from '@sveltejs/kit';
import { auth } from '#lib/server/auth.js';

export function load({ url }) {
	return { token: url.searchParams.get('token') };
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const token = formData.get('token');
		const newPassword = formData.get('password');

		if (!newPassword) {
			return fail(400, { message: 'Please enter a new password.' });
		}

		try {
			await auth.api.resetPassword({ body: { token, newPassword } });
		} catch (error) {
			return fail(400, { message: error.message });
		}

		redirect(303, '/login');
	}
};
