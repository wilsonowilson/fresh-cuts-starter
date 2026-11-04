<script>
	const shopName = 'Fresh Cuts';
	const phone = '0803 123 4567';
	const isOpen = true;
</script>

<header class="bg-gray-900 text-white">
	<div class="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:justify-between">
		<div>
			<h1 class="text-2xl font-bold">{shopName}</h1>
			{#if isOpen}
				<span class="text-sm text-green-400">Open now</span>
			{:else}
				<span class="text-sm text-red-400">Closed</span>
			{/if}
		</div>
		<a href="tel:08031234567" class="font-semibold underline">Call {phone}</a>
	</div>
</header>
