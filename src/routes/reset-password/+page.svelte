<script>
	import { enhance } from '$app/forms';

	let { data, form } = $props();
</script>

<svelte:head>
	<title>Choose a new password | Fresh Cuts</title>
	<meta name="description" content="Choose a new password for your Fresh Cuts account." />
</svelte:head>

<main class="mx-auto max-w-sm px-4 py-8">
	<h1 class="text-2xl font-bold">Choose a new password</h1>

	{#if data.token}
		<form method="POST" use:enhance class="mt-6 flex flex-col gap-4">
			<input type="hidden" name="token" value={data.token} />
			<label>
				<span class="text-gray-700">New password (at least 8 characters)</span>
				<input name="password" type="password" class="mt-1 block w-full rounded border border-gray-300 p-2" />
			</label>
			{#if form?.message}
				<p class="text-sm text-red-700">{form.message}</p>
			{/if}
			<button class="rounded bg-gray-900 px-4 py-2 font-semibold text-white">Save new password</button>
		</form>
	{:else}
		<p class="mt-4">This link does not work. <a href="/forgot-password" class="underline">Ask for a new one.</a></p>
	{/if}
</main>
