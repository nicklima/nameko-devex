import type { ProductResponse } from './interface'

export async function load({ fetch }) {
	const fetchResponse = async () => {
		const productResponse = await fetch('http://localhost:8003/orders/1')
		const product: ProductResponse = await productResponse.json()
		return product
	}

	const mockedProduct: ProductResponse = {
		id: 1,
		order_details: [
			{
				id: 1,
				quantity: 1,
				product_id: 'the_odyssey',
				image: 'https://images.unsplash.com/photo-1623020874699-0ddd626114a8',
				// image: 'http://www.example.com/airship/images/the_odyssey.jpg',
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

	return {
		product: mockedProduct,
		//fetchResponse()
	}
}
