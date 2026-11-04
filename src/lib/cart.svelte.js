// Browser state only. Never keep one user's data here on the server.
export const cart = $state({ items: [] });

export function addToCart(service) {
	if (cart.items.find((item) => item.id === service.id)) {
		return;
	}
	cart.items.push(service);
}

export function removeFromCart(id) {
	cart.items = cart.items.filter((item) => item.id !== id);
}
