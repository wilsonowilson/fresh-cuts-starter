<script>
	import { cart, addToCart } from '#lib/cart.svelte.js';

	let { id, name, price, minutes, popular } = $props();

	let added = $derived(cart.items.find((item) => item.id === id));
</script>

<div class="rounded-lg border border-gray-200 p-4">
	<div class="flex items-center justify-between gap-2">
		<h3 class="text-lg font-semibold">
			<a href="/services/{id}" class="underline">{name}</a>
		</h3>
		{#if popular}
			<span class="rounded bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800">Popular</span>
		{/if}
	</div>
	<p class="mt-1 text-gray-600">{minutes} minutes</p>
	<p class="mt-2 text-xl font-bold">₦{price.toLocaleString()}</p>
	{#if added}
		<p class="mt-4 py-2 text-center font-semibold text-green-700">In your visit</p>
	{:else}
		<button
			onclick={() => addToCart({ id, name, price })}
			class="mt-4 w-full rounded bg-gray-900 px-4 py-2 font-semibold text-white"
		>
			Add to my visit
		</button>
	{/if}
</div>
