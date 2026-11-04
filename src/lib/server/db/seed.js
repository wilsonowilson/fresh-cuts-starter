import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { services } from './schema.js';

// Run once with: npm run db:seed
const starterServices = [
	{
		name: 'Low cut',
		category: 'haircut',
		price: 3000,
		minutes: 30,
		popular: true,
		description: 'Short all over, neat and even.'
	},
	{
		name: 'Skin fade',
		category: 'haircut',
		price: 5000,
		minutes: 45,
		popular: true,
		description: 'Faded down to the skin at the sides and back.'
	},
	{
		name: 'Afro shape-up',
		category: 'haircut',
		price: 4000,
		minutes: 40,
		popular: false,
		description: 'Your afro shaped round, with a clean line-up.'
	},
	{
		name: "Kids' cut",
		category: 'haircut',
		price: 2500,
		minutes: 30,
		popular: false,
		description: 'Any simple cut for children under 12.'
	},
	{
		name: 'Beard trim',
		category: 'beard',
		price: 2000,
		minutes: 20,
		popular: true,
		description: 'Your beard trimmed and shaped, with a sharp line.'
	},
	{
		name: 'Clean shave',
		category: 'beard',
		price: 2500,
		minutes: 25,
		popular: false,
		description: 'A smooth shave with a hot towel.'
	},
	{
		name: 'Hair dye (black)',
		category: 'extras',
		price: 6000,
		minutes: 45,
		popular: false,
		description: 'Black dye for your hair or beard.'
	},
	{
		name: 'Wash and steam',
		category: 'extras',
		price: 3500,
		minutes: 30,
		popular: false,
		description: 'A wash, a steam and a scalp treatment.'
	}
];

const client = postgres(process.env.DATABASE_URL);
const db = drizzle(client);

const existing = await db.select().from(services);

if (existing.length > 0) {
	console.log('The services table already has rows. Nothing was added.');
} else {
	await db.insert(services).values(starterServices);
	console.log(`Added ${starterServices.length} services.`);
}

await client.end();
