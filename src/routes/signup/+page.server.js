import { fail, redirect } from '@sveltejs/kit';
import { auth } from '#lib/server/auth.js';

export function load({ locals }) {
	if (locals.user) {
		redirect(303, '/dashboard');
	}
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const password = formData.get('password');

		if (!name || !email || !password) {
			return fail(400, { name, email, message: 'Please fill in every box.' });
		}

		try {
			await auth.api.signUpEmail({ body: { name, email, password } });
		} catch (error) {
			return fail(400, { name, email, message: error.message });
		}

		redirect(303, '/dashboard');
	}
};
