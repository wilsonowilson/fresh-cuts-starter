import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	DATABASE_URL: { description: 'Where the database is, and its password. Keep it secret.' },
	ORIGIN: { description: 'The address of your site, like http://localhost:5173 or your Netlify address.' },
	BETTER_AUTH_SECRET: { description: 'A long random secret that Better Auth uses to sign session cookies.' },
	RESEND_API_KEY: { description: 'Your Resend key, for sending emails. Leave it empty to print emails in the terminal.' }
});
