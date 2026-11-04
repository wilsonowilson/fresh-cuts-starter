import { error } from '@sveltejs/kit';
import { services } from '#lib/content.js';

export function load({ params }) {
	const service = services.find((item) => item.id === Number(params.id));

	if (!service) {
		error(404, 'Service not found');
	}

	return { service };
}
