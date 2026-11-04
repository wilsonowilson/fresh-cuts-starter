<script>
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';

	let { data, form } = $props();

	console.log('This runs on the server, then again in the browser.');

	onMount(() => {
		console.log('This runs only in the browser.');
	});
</script>

<svelte:head>
	<title>Book a visit | Fresh Cuts</title>
	<meta name="description" content="Send Fresh Cuts a booking request. We will call you to confirm the time." />
</svelte:head>

<main class="mx-auto max-w-xl px-4 py-8">
	<h1 class="text-2xl font-bold">Send a booking request</h1>
	<p class="mt-1 text-gray-600">We will call you to confirm the time.</p>

	<form method="POST" use:enhance class="mt-6 flex flex-col gap-4">
		<label>
			<span class="text-gray-700">Your name</span>
			<input name="name" value={form?.values?.name ?? ''} class="mt-1 block w-full rounded border border-gray-300 p-2" />
		</label>
		{#if form?.errors?.name}
			<p class="text-sm text-red-700">{form.errors.name}</p>
		{/if}

		<label>
			<span class="text-gray-700">Phone number</span>
			<input name="phone" type="tel" value={form?.values?.phone ?? ''} class="mt-1 block w-full rounded border border-gray-300 p-2" />
		</label>
		{#if form?.errors?.phone}
			<p class="text-sm text-red-700">{form.errors.phone}</p>
		{/if}

		<label>
			<span class="text-gray-700">Service</span>
			<select name="service" value={form?.values?.service ?? ''} class="mt-1 block w-full rounded border border-gray-300 p-2">
				<option value="">Choose a service</option>
				{#each data.services as service}
					<option value={String(service.id)}>{service.name} (₦{service.price.toLocaleString()})</option>
				{/each}
			</select>
		</label>
		{#if form?.errors?.service}
			<p class="text-sm text-red-700">{form.errors.service}</p>
		{/if}

		<label>
			<span class="text-gray-700">Day</span>
			<select name="day" value={form?.values?.day ?? ''} class="mt-1 block w-full rounded border border-gray-300 p-2">
				<option value="">Choose a day</option>
				{#each data.days as day}
					<option value={day}>{day}</option>
				{/each}
			</select>
		</label>
		{#if form?.errors?.day}
			<p class="text-sm text-red-700">{form.errors.day}</p>
		{/if}

		<label>
			<span class="text-gray-700">Barber</span>
			<select name="barber" value={form?.values?.barber ?? ''} class="mt-1 block w-full rounded border border-gray-300 p-2">
				<option value="">Choose a barber</option>
				{#each data.barbers as barber}
					<option value={barber.id}>{barber.name}</option>
				{/each}
			</select>
		</label>
		{#if form?.errors?.barber}
			<p class="text-sm text-red-700">{form.errors.barber}</p>
		{/if}

		<button class="rounded bg-gray-900 px-4 py-2 font-semibold text-white">Send request</button>
	</form>
</main>
