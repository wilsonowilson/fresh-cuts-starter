import { betterAuth } from 'better-auth/minimal';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';
import { ORIGIN, BETTER_AUTH_SECRET } from '$app/env/private';
import { db } from '#lib/server/db/index.js';
import { user, session, account, verification } from '#lib/server/db/auth.schema.js';
import { sendEmail } from '#lib/server/email.js';

export const auth = betterAuth({
	baseURL: ORIGIN,
	secret: BETTER_AUTH_SECRET,
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema: { user, session, account, verification }
	}),
	emailAndPassword: {
		enabled: true,
		sendResetPassword: async ({ user, url }) => {
			await sendEmail({
				to: user.email,
				subject: 'Reset your Fresh Cuts password',
				text: `Open this link to choose a new password: ${url}`
			});
		}
	},
	plugins: [sveltekitCookies(getRequestEvent)]
});
