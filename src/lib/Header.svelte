<script>
	import { cart } from '#lib/cart.svelte.js';
	import { orderTotal } from '#lib/prices.js';

	let { user } = $props();

	const shopName = 'Fresh Cuts';
	const phone = '0803 123 4567';
	const isOpen = true;

	let total = $derived(orderTotal(cart.items));
</script>

<header class="bg-gray-900 text-white">
	<div class="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:justify-between">
		<div>
			<a href="/" class="text-2xl font-bold">{shopName}</a>
			{#if isOpen}
				<span class="ml-2 text-sm text-green-400">Open now</span>
			{:else}
				<span class="ml-2 text-sm text-red-400">Closed</span>
			{/if}
		</div>
		<nav class="flex flex-wrap gap-4">
			<a href="/services" class="underline">Services</a>
			<a href="/book" class="underline">Book</a>
			<a href="/visit" class="underline">My visit: {cart.items.length} (₦{total.toLocaleString()})</a>
			<a href="tel:08031234567" class="font-semibold underline">Call {phone}</a>
			{#if user}
				<a href="/dashboard" class="underline">Dashboard</a>
				<form method="POST" action="/logout">
					<button class="underline">Log out</button>
				</form>
			{:else}
				<a href="/login" class="underline">Barbers: log in</a>
			{/if}
		</nav>
	</div>
</header>
