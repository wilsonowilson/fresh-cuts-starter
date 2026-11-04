import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '#lib/server/db/index.js';
import { services } from '#lib/server/db/schema.js';

export async function load({ params }) {
	const id = Number(params.id);
	if (!Number.isInteger(id)) {
		error(404, 'Service not found');
	}

	const rows = await db.select().from(services).where(eq(services.id, id));
	const service = rows[0];

	if (!service) {
		error(404, 'Service not found');
	}

	return { service };
}
