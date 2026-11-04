<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<svelte:head>
	<title>Log in | Fresh Cuts</title>
	<meta name="description" content="Barbers at Fresh Cuts log in to see their bookings." />
</svelte:head>

<main class="mx-auto max-w-sm px-4 py-8">
	<h1 class="text-2xl font-bold">Log in</h1>

	<form method="POST" use:enhance class="mt-6 flex flex-col gap-4">
		<label>
			<span class="text-gray-700">Email</span>
			<input name="email" type="email" value={form?.email ?? ''} class="mt-1 block w-full rounded border border-gray-300 p-2" />
		</label>
		<label>
			<span class="text-gray-700">Password</span>
			<input name="password" type="password" class="mt-1 block w-full rounded border border-gray-300 p-2" />
		</label>
		{#if form?.message}
			<p class="text-sm text-red-700">{form.message}</p>
		{/if}
		<button class="rounded bg-gray-900 px-4 py-2 font-semibold text-white">Log in</button>
	</form>

	<p class="mt-6"><a href="/forgot-password" class="underline">Forgot your password?</a></p>
	<p class="mt-2">New barber? <a href="/signup" class="underline">Create an account</a></p>
</main>
