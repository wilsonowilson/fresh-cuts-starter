<script>
	import Header from '#lib/Header.svelte';
	import ServiceCard from '#lib/ServiceCard.svelte';
	import TipCalculator from '#lib/TipCalculator.svelte';
	import Footer from '#lib/Footer.svelte';
	import { services } from '#lib/content.js';

	let bookings = $state(0);

	function book() {
		bookings++;
	}
</script>

<Header />

<main class="mx-auto max-w-5xl px-4 py-8">
	<section>
		<h2 class="text-2xl font-bold">Our services</h2>
		<p class="mt-1 text-gray-600">Bookings made: {bookings}</p>
		<a href="/book" class="mt-4 inline-block rounded bg-gray-900 px-4 py-2 font-semibold text-white">
			Send a booking request
		</a>

		<div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
			{#each services as service}
				<ServiceCard
					name={service.name}
					price={service.price}
					minutes={service.minutes}
					popular={service.popular}
					onbook={book}
				/>
			{/each}
		</div>
	</section>

	<TipCalculator />
</main>

<Footer />
