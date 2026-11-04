import { pgTable, serial, text, integer, boolean, timestamp } from 'drizzle-orm/pg-core';
import { user } from './auth.schema.js';

export const services = pgTable('services', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	category: text('category').notNull(),
	price: integer('price').notNull(),
	minutes: integer('minutes').notNull(),
	popular: boolean('popular').notNull().default(false),
	description: text('description').notNull()
});

export const bookings = pgTable('bookings', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	phone: text('phone').notNull(),
	day: text('day').notNull(),
	status: text('status').notNull().default('requested'),
	serviceId: integer('service_id')
		.notNull()
		.references(() => services.id),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	createdAt: timestamp('created_at').notNull().defaultNow()
});
