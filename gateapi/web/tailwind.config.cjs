module.exports = {
	content: [
		'./src/**/*.html',
		'./src/**/*.svelte',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
}
