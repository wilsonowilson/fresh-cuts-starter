<script>
	import ServiceCard from '#lib/ServiceCard.svelte';
	import TipCalculator from '#lib/TipCalculator.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Fresh Cuts | Barbershop in Ikeja, Lagos</title>
	<meta name="description" content="Haircuts, fades and beard trims in Ikeja. See our prices and book online." />
</svelte:head>

<main class="mx-auto max-w-5xl px-4 py-8">
	<section>
		<h2 class="text-2xl font-bold">Popular services</h2>
		<div class="mt-4 flex flex-wrap gap-4">
			<a href="/services" class="rounded border border-gray-900 px-4 py-2 font-semibold">See all services</a>
			<a href="/book" class="rounded bg-gray-900 px-4 py-2 font-semibold text-white">Send a booking request</a>
		</div>

		<div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
			{#each data.services as service}
				<ServiceCard
					id={service.id}
					name={service.name}
					price={service.price}
					minutes={service.minutes}
					popular={service.popular}
				/>
			{/each}
		</div>
	</section>

	<TipCalculator />
</main>
