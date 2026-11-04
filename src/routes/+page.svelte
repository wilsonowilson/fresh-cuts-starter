<script>
	import Header from '#lib/Header.svelte';
	import ServiceCard from '#lib/ServiceCard.svelte';
	import TipCalculator from '#lib/TipCalculator.svelte';
	import Footer from '#lib/Footer.svelte';

	const services = [
		{ name: 'Low cut', price: 3000, minutes: 30, popular: true },
		{ name: 'Skin fade', price: 5000, minutes: 45, popular: true },
		{ name: 'Afro shape-up', price: 4000, minutes: 40, popular: false },
		{ name: "Kids' cut", price: 2500, minutes: 30, popular: false },
		{ name: 'Beard trim', price: 2000, minutes: 20, popular: true },
		{ name: 'Clean shave', price: 2500, minutes: 25, popular: false },
		{ name: 'Hair dye (black)', price: 6000, minutes: 45, popular: false },
		{ name: 'Wash and steam', price: 3500, minutes: 30, popular: false }
	];

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
