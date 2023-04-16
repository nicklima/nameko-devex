import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			'@icons': path.resolve('./src/icons'),
			'@utils': path.resolve('./src/utils'),
			'@components': path.resolve('./src/components'),
		},
	},
}

export default config
