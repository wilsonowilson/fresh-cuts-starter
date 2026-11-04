<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<svelte:head>
	<title>Forgot your password? | Fresh Cuts</title>
	<meta name="description" content="Get an email with a link to choose a new password." />
</svelte:head>

<main class="mx-auto max-w-sm px-4 py-8">
	<h1 class="text-2xl font-bold">Forgot your password?</h1>

	{#if form?.sent}
		<p class="mt-4 rounded bg-green-100 p-3 text-green-800">
			If that email has an account, we sent it a link. Check your inbox.
		</p>
	{:else}
		<form method="POST" use:enhance class="mt-6 flex flex-col gap-4">
			<label>
				<span class="text-gray-700">Email</span>
				<input name="email" type="email" value={form?.email ?? ''} class="mt-1 block w-full rounded border border-gray-300 p-2" />
			</label>
			{#if form?.message}
				<p class="text-sm text-red-700">{form.message}</p>
			{/if}
			<button class="rounded bg-gray-900 px-4 py-2 font-semibold text-white">Send me a link</button>
		</form>
	{/if}
</main>
