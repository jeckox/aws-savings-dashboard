<script lang="ts">
	import Highcharts from 'highcharts';
	import { Chart } from '@highcharts/svelte';
	import type { SavingsByCategory } from '$lib/types';
	import { themeHighcharts } from '$lib/highchartsTheme';
	export let categories: SavingsByCategory[] = [];

	const xAxisCategories = categories.map((category: SavingsByCategory) => category.service);
	const yAxisData = categories.map((category: SavingsByCategory) => category.savings);

	const chartOptions = {
		...themeHighcharts,
		chart: { ...themeHighcharts.chart, type: 'bar' },
		title: { text: null },
		tooltip: {
			formatter: function (): string {
				return `<b>${this.x}</b><br>Savings: $${this.y}`;
			}
		},
		xAxis: { ...themeHighcharts.xAxis, categories: xAxisCategories, reversed: false },
		yAxis: { ...themeHighcharts.yAxis, title: { text: null } },
		series: [
			{
				name: 'Savings',
				data: yAxisData,
				colorByPoint: true
			}
		],
		legend: { enabled: false },
		credits: { enabled: false }
	} as unknown as Highcharts.Options;
</script>

<Chart options={chartOptions} highcharts={Highcharts} />
