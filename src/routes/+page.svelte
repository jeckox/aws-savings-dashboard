<script lang="ts">
	import type { PageProps } from './$types';
	import TrendsChart from '$lib/components/TrendsChart.svelte';
	import CategoryChart from '$lib/components/CategoryChart.svelte';
	import CardMessage from '$lib/components/CardMessage.svelte';
	import type { SavingsTrend, SavingsByCategory, DetailedSavings } from '$lib/types';
	import TableDetail from '$lib/components/TableDetail.svelte';

	let { data }: PageProps = $props();
	const { savingsData } = data;
	const trendsData = savingsData.savingsTrends || ([] as SavingsTrend[]);
	const categories = savingsData.savingsByCategory || ([] as SavingsByCategory[]);
	const totalSavings = `$${savingsData.overview.totalSavings}`;
	const currentMonthSavings = `$${savingsData.overview.currentMonthSavings}`;
	const percentageChange = `${savingsData.overview.percentageChange}%`;
	const detailedSavings = savingsData.detailedSavings || ([] as DetailedSavings[]);
</script>

<div class="min-h-screen bg-(--color-brand-gray) p-8">
	<header class="title mb-8">AWS Savings Dashboard</header>

	<div class="grid grid-cols-3 gap-6">
		<div class="space-y-4">
			<CardMessage title="Total Savings" type="primary" value={totalSavings} />
			<CardMessage title="Current Month Savings" type="secondary" value={currentMonthSavings} />
			<CardMessage title="Percentage Change" type="secondary" value={percentageChange} />
		</div>

		<div class="r border-brand-white">
			<TrendsChart {trendsData} />
		</div>

		<div class=" border-brand-white">
			<CategoryChart {categories} />
		</div>
	</div>

	<div class="mt-8 rounded-lg p-6">
		<div class="mb-4 flex items-center justify-between">
			<h2 class="text-xl font-semibold">Current Month</h2>
		</div>
		<TableDetail {detailedSavings} />
	</div>
</div>
