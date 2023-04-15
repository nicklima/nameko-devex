import { sveltekit } from '@sveltejs/kit/vite'

export default {
	plugins: [sveltekit()],
	server: {
		port: 9000,
		proxy: {
			'/orders': {
				target: 'http://127.0.0.1:8000/',
				changeOrigin: true,
				secure: false,
			},
		},
	},
}
