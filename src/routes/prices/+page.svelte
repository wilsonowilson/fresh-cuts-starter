<script>
	const services = [
		{ name: 'Low cut', price: 3000 },
		{ name: 'Beard trim', price: 2000 }
	];
</script>

<svelte:head>
	<title>Prices | Fresh Cuts</title>
</svelte:head>

<h1 class="text-3xl font-bold">Prices</h1>

{#each services as service}
	<p>{service.name}: ₦{service.price.toLocaleString()}</p>
{/each}
