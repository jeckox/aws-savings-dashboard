<script lang="ts">
	import type { DetailedSavings } from '$lib/types';
	export let detailedSavings: DetailedSavings[] = [];
</script>

<table class="bg-brand-black min-w-full divide-y text-left text-sm text-gray-400">
	<thead class="bg-brand-gray border-brand-white text-xs text-gray-300 uppercase">
		<tr>
			<th scope="col" class="px-6 py-3 text-left">Date</th>
			<th scope="col" class="px-6 py-3 text-left">Service</th>
			<th scope="col" class="px-6 py-3 text-left">Amount</th>
		</tr>
	</thead>
	<tbody class="divide-y">
		{#each detailedSavings as item}
			<tr class="transition-colors duration-200 hover:bg-gray-700">
				<td class="px-6 py-4 whitespace-nowrap">{item.date}</td>
				<td class="px-6 py-4 whitespace-nowrap">{item.service}</td>
				<td class="px-6 py-4 whitespace-nowrap">{item.amount}</td>
			</tr>
		{/each}
	</tbody>
</table>
