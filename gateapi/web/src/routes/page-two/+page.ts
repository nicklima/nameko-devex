import type { ProductResponse } from './interface'

export async function load({ fetch }) {
	const fetchResponse = async () => {
		const productResponse = await fetch('http://localhost:8003/orders/1')
		const product: ProductResponse = await productResponse.json()
		return product
	}

	return {
		product: fetchResponse(),
	}
}
