<script>
	import { onMount } from 'svelte';

	let { data, form } = $props();

	console.log('This runs on the server, then again in the browser.');

	onMount(() => {
		console.log('This runs only in the browser.');
	});
</script>

<main class="mx-auto max-w-xl px-4 py-8">
	<a href="/" class="text-gray-600 underline">Back to Fresh Cuts</a>
	<h1 class="mt-4 text-2xl font-bold">Send a booking request</h1>
	<p class="mt-1 text-gray-600">We will call you to confirm the time.</p>

	{#if form?.success}
		<p class="mt-4 rounded bg-green-100 p-3 text-green-800">Thank you! We got your request.</p>
	{/if}

	<form method="POST" class="mt-6 flex flex-col gap-4">
		<label>
			<span class="text-gray-700">Your name</span>
			<input name="name" value={form?.values?.name} class="mt-1 block w-full rounded border border-gray-300 p-2" />
		</label>
		{#if form?.errors?.name}
			<p class="text-sm text-red-700">{form.errors.name}</p>
		{/if}

		<label>
			<span class="text-gray-700">Phone number</span>
			<input name="phone" type="tel" value={form?.values?.phone} class="mt-1 block w-full rounded border border-gray-300 p-2" />
		</label>
		{#if form?.errors?.phone}
			<p class="text-sm text-red-700">{form.errors.phone}</p>
		{/if}

		<label>
			<span class="text-gray-700">Service</span>
			<select name="service" value={form?.values?.service} class="mt-1 block w-full rounded border border-gray-300 p-2">
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
			<select name="day" value={form?.values?.day} class="mt-1 block w-full rounded border border-gray-300 p-2">
				<option value="">Choose a day</option>
				{#each data.days as day}
					<option value={day}>{day}</option>
				{/each}
			</select>
		</label>
		{#if form?.errors?.day}
			<p class="text-sm text-red-700">{form.errors.day}</p>
		{/if}

		<button class="rounded bg-gray-900 px-4 py-2 font-semibold text-white">Send request</button>
	</form>

	<p class="mt-8 text-sm text-gray-600">Requests since the server started: {data.bookingCount}</p>
</main>
