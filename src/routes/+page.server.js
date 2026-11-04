import { eq } from 'drizzle-orm';
import { db } from '#lib/server/db/index.js';
import { services } from '#lib/server/db/schema.js';

export async function load() {
	const popularServices = await db
		.select()
		.from(services)
		.where(eq(services.popular, true))
		.orderBy(services.id);

	return { services: popularServices };
}
