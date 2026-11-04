import { eq } from 'drizzle-orm';
import { db } from '#lib/server/db/index.js';
import { services } from '#lib/server/db/schema.js';
import { categories } from '#lib/content.js';

export async function load({ url }) {
	const category = url.searchParams.get('category');

	let list;
	if (category) {
		list = await db.select().from(services).where(eq(services.category, category)).orderBy(services.id);
	} else {
		list = await db.select().from(services).orderBy(services.id);
	}

	return { services: list, categories, category };
}
