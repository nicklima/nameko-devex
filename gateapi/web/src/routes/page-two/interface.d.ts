export type ProductItem = {
	maximum_speed: number
	id: string
	title: string
	passenger_capacity: number
	in_stock: number
}

export type OrderDetail = {
	id: number
	quantity: number
	product_id: string
	image: string
	price: string
	product: ProductItem
}

export type ProductResponse = {
	id: number
	order_details: OrderDetail[]
}
