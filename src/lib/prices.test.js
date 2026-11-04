import { test, expect } from 'vitest';
import { orderTotal } from './prices.js';

test('adds up the price of every service', () => {
	const items = [
		{ name: 'Low cut', price: 3000 },
		{ name: 'Beard trim', price: 2000 }
	];
	expect(orderTotal(items)).toBe(5000);
});

test('an empty visit costs nothing', () => {
	expect(orderTotal([])).toBe(0);
});
