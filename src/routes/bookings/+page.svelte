<script>
	import { enhance } from '$app/forms';

	let { data } = $props();
</script>

<svelte:head>
	<title>Booking requests | Fresh Cuts</title>
	<meta name="description" content="Every booking request the shop has received." />
</svelte:head>

<main class="mx-auto max-w-xl px-4 py-8">
	<h1 class="text-2xl font-bold">Booking requests</h1>

	{#each data.bookings as booking}
		<div class="mt-4 rounded-lg border border-gray-200 p-4">
			<p class="font-semibold">{booking.name}, {booking.phone}</p>
			<p>{booking.service} on {booking.day}</p>
			<p class="text-sm text-gray-600">Status: {booking.status}</p>
			{#if booking.status === 'requested'}
				<form method="POST" action="?/cancel" use:enhance>
					<input type="hidden" name="id" value={booking.id} />
					<button class="mt-2 text-sm text-red-700 underline">Cancel this booking</button>
				</form>
			{/if}
		</div>
	{:else}
		<p class="mt-4 text-gray-600">No booking requests yet.</p>
	{/each}
</main>
