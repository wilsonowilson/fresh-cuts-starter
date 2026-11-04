<script>
	import { cart, removeFromCart } from '#lib/cart.svelte.js';
	import { orderTotal } from '#lib/prices.js';

	let total = $derived(orderTotal(cart.items));
</script>

<svelte:head>
	<title>My visit | Fresh Cuts</title>
	<meta name="description" content="The services you picked, and what your visit will cost." />
</svelte:head>

<main class="mx-auto max-w-xl px-4 py-8">
	<h1 class="text-2xl font-bold">My visit</h1>

	{#each cart.items as item}
		<div class="mt-4 flex items-center justify-between gap-2 border-b border-gray-200 pb-2">
			<span>{item.name}</span>
			<span class="font-semibold">₦{item.price.toLocaleString()}</span>
			<button onclick={() => removeFromCart(item.id)} class="text-sm text-red-700 underline">Remove</button>
		</div>
	{:else}
		<p class="mt-4 text-gray-600">You have not picked any services yet.</p>
	{/each}

	<p class="mt-6 text-xl">Total: <strong>₦{total.toLocaleString()}</strong></p>

	<a href="/book" class="mt-6 inline-block rounded bg-gray-900 px-4 py-2 font-semibold text-white">
		Send a booking request
	</a>
</main>
