import { services, categories } from '#lib/content.js';

export function load({ url }) {
	const category = url.searchParams.get('category');

	let list = services;
	if (category) {
		list = services.filter((service) => service.category === category);
	}

	return { services: list, categories, category };
}
