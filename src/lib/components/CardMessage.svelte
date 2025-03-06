<script lang="ts">
	export let title: string = '';
	export let value: string = '';
	export let type: 'primary' | 'secondary' = 'primary';

	const typeClasses = {
		primary: 'border-brand-purple bg-brand-black',
		secondary: 'border-brand-green bg-brand-black'
	};
	const classes = typeClasses[type];
</script>

<div class={`${classes} w-80 p-6 `}>
	<p class="text-lg tracking-wider uppercase">{title}</p>
	<p class="mt-2 text-4xl"><span>{value}</span></p>
</div>
