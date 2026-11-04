<script>
	const price = 3000;
	let tip = $state('');
</script>

<section class="mt-10 rounded-lg bg-gray-100 p-4">
	<h2 class="text-2xl font-bold">Add a tip</h2>
	<label class="mt-4 block">
		<span class="text-gray-700">Tip in naira</span>
		<input bind:value={tip} inputmode="numeric" class="mt-1 block w-full rounded border border-gray-300 p-2" />
	</label>
	<p class="mt-4">
		Low cut ₦{price.toLocaleString()} + tip = <strong>₦{(price + Number(tip)).toLocaleString()}</strong>
	</p>
</section>
