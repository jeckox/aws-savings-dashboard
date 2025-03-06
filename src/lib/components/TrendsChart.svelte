<script lang="ts">
	import Highcharts from 'highcharts';
	import { Chart } from '@highcharts/svelte';
	import type { SavingsTrend } from '$lib/types';
	import { themeHighcharts } from '$lib/highchartsTheme';

	export let trendsData: SavingsTrend[] = [];

	const chartOptions = {
		...themeHighcharts,
		chart: { ...themeHighcharts.chart, type: 'line' },
		title: { text: null },
		xAxis: {
			...themeHighcharts.xAxis,
			categories: trendsData.map((trend: SavingsTrend) => trend.month)
		},
		tooltip: {
			formatter: function (): string {
				return `<b>${this.x}</b><br>Savings: $${this.y}`;
			}
		},
		yAxis: { ...themeHighcharts.yAxis, title: { text: 'Savings' } },
		series: [{ name: 'Savings', data: trendsData.map((trend: SavingsTrend) => trend.savings) }],
		legend: { enabled: false },
		credits: { enabled: false }
	} as unknown as Highcharts.Options;
</script>

<Chart options={chartOptions} highcharts={Highcharts} />
