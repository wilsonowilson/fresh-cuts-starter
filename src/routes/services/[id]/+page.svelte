<script>
	import { cart, addToCart } from '#lib/cart.svelte.js';

	let { data } = $props();

	let added = $derived(cart.items.find((item) => item.id === data.service.id));
</script>

<svelte:head>
	<title>{data.service.name} | Fresh Cuts</title>
	<meta name="description" content={data.service.description} />
</svelte:head>

<main class="mx-auto max-w-xl px-4 py-8">
	<a href="/services" class="text-gray-600 underline">All services</a>
	<h1 class="mt-4 text-2xl font-bold">{data.service.name}</h1>
	<p class="mt-2">{data.service.description}</p>
	<p class="mt-2 text-gray-600">{data.service.minutes} minutes</p>
	<p class="mt-2 text-2xl font-bold">₦{data.service.price.toLocaleString()}</p>

	<div class="mt-6 flex flex-col gap-3 md:flex-row">
		{#if added}
			<p class="py-2 font-semibold text-green-700">In your visit</p>
		{:else}
			<button
				onclick={() => addToCart(data.service)}
				class="rounded bg-gray-900 px-4 py-2 font-semibold text-white"
			>
				Add to my visit
			</button>
		{/if}
		<a href="/book" class="rounded border border-gray-900 px-4 py-2 text-center font-semibold">
			Send a booking request
		</a>
	</div>
</main>
