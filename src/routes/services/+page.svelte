<script>
	import ServiceCard from '#lib/ServiceCard.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Services and prices | Fresh Cuts</title>
	<meta name="description" content="Every haircut, beard and extra service at Fresh Cuts, with prices in naira." />
</svelte:head>

<main class="mx-auto max-w-5xl px-4 py-8">
	<h1 class="text-2xl font-bold">Services and prices</h1>

	<nav class="mt-4 flex flex-wrap gap-2">
		<a href="/services" class="rounded bg-gray-100 px-3 py-1">All</a>
		{#each data.categories as category}
			<a href="/services?category={category}" class="rounded bg-gray-100 px-3 py-1 capitalize">{category}</a>
		{/each}
	</nav>

	{#if data.category}
		<p class="mt-4 text-gray-600">Showing: {data.category}</p>
	{/if}

	<div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
		{#each data.services as service}
			<ServiceCard
				id={service.id}
				name={service.name}
				price={service.price}
				minutes={service.minutes}
				popular={service.popular}
			/>
		{:else}
			<p>No services in this category.</p>
		{/each}
	</div>
</main>
