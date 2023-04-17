import { sveltekit } from '@sveltejs/kit/vite'

const ENDPOINT =
	process.env.NODE_ENV === 'development'
		? 'http://127.0.0.1:9000/'
		: 'http://127.0.0.1:4173'

export default {
	plugins: [sveltekit()],
	server: {
		port: 9000,
		proxy: {
			'/orders': {
				target: ENDPOINT,
				changeOrigin: true,
				secure: false,
			},
		},
	},
}
