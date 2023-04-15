import type { ProductResponse } from './interface'

export async function load({ fetch }) {
	const fetchResponse = async () => {
		const productResponse = await fetch('http://localhost:8003/orders/1')
		const product = await productResponse.json()

		return product
	}

	const mockedProduct: ProductResponse = {
		id: 1,
		order_details: [
			{
				id: 1,
				quantity: 1,
				product_id: 'the_odyssey',
				image: 'http://www.example.com/airship/images/the_odyssey.jpg',
				price: '100000.99',
				product: {
					maximum_speed: 5,
					id: 'the_odyssey',
					title: 'The Odyssey',
					passenger_capacity: 101,
					in_stock: 9,
				},
			},
		],
	}

	return { product: mockedProduct }
}
