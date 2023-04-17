import { error } from '@sveltejs/kit'
import type { ProductResponse } from './interface'

export async function load({ fetch }) {
	const PORT = process.env.NODE_ENV === 'development' ? '3000' : '4173'

	const fetchResponse = async () => {
		let product: ProductResponse
		const url = `http://localhost:${PORT}/orders/1`
		const productResponse = await fetch(url)

		if (!productResponse.ok) {
			throw error(
				productResponse.status,
				`HTTP error! status: ${productResponse.status}`
			)
		}

		product = await productResponse.json()
		return product
	}

	return {
		product: fetchResponse(),
	}
}
