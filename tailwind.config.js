/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'brand-white': '#F8FCFD',
				'brand-black': '#1E2125',
				'brand-purple': '#D591FE',
				'brand-cyan': '#00FFD1'
			},
			fontFamily: {
				'red-hat-mono': ['Red Hat Mono', 'monospace'],
				satoshi: ['Satoshi', 'sans-serif']
			}
		}
	},
	plugins: []
};
