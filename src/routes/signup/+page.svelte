<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<svelte:head>
	<title>Create a barber account | Fresh Cuts</title>
	<meta name="description" content="Barbers at Fresh Cuts create an account to see their bookings." />
</svelte:head>

<main class="mx-auto max-w-sm px-4 py-8">
	<h1 class="text-2xl font-bold">Create a barber account</h1>

	<form method="POST" use:enhance class="mt-6 flex flex-col gap-4">
		<label>
			<span class="text-gray-700">Your name</span>
			<input name="name" value={form?.name ?? ''} class="mt-1 block w-full rounded border border-gray-300 p-2" />
		</label>
		<label>
			<span class="text-gray-700">Email</span>
			<input name="email" type="email" value={form?.email ?? ''} class="mt-1 block w-full rounded border border-gray-300 p-2" />
		</label>
		<label>
			<span class="text-gray-700">Password (at least 8 characters)</span>
			<input name="password" type="password" class="mt-1 block w-full rounded border border-gray-300 p-2" />
		</label>
		{#if form?.message}
			<p class="text-sm text-red-700">{form.message}</p>
		{/if}
		<button class="rounded bg-gray-900 px-4 py-2 font-semibold text-white">Create account</button>
	</form>

	<p class="mt-6">Already have an account? <a href="/login" class="underline">Log in</a></p>
</main>
