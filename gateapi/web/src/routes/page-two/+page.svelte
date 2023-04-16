<script lang="ts">
	import { Breadcrumb } from '@components'
	import type { OrderDetail } from './interface'

	export let data
	const {
		product: { id, order_details },
	} = data

	let orderDetail: OrderDetail = order_details.find((item) => item.id === id)
</script>

<svelte:head>
	<title>Nameko | Page Two</title>
</svelte:head>

<div class="flex mx-auto flex-col align-center max-w-4xl p-5">
	<Breadcrumb pageName="Page Two" />

	<h1 class="text-3xl pt-16">Page Two</h1>
	<p class="text-base text-gray-900 space-y-6 mt-8">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
	</p>

	<div class="rounded p-10 bg-slate-100 mt-10 sm:grid grid-cols-12 gap-10">
		<div class="sm:col-span-7">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
				{orderDetail.product.title}
			</h2>
			<div>
				<div class="mt-6 border-t border-slate-300">
					<dl class="divide-y divide-slate-300">
						<div class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
							<dt class="text-sm font-medium leading-6 text-gray-900">Price</dt>
							<dd
								class="mt-1 text-sm leading-6 text-gray-700 sm:mt-0 sm:text-right"
							>
								${orderDetail.price}
							</dd>
						</div>
						<div class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
							<dt class="text-sm font-medium leading-6 text-gray-900">
								In stock
							</dt>
							<dd
								class="mt-1 text-sm leading-6 text-gray-700 sm:mt-0 sm:text-right"
							>
								{orderDetail.product.in_stock}
							</dd>
						</div>
						<div class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
							<dt class="text-sm font-medium leading-6 text-gray-900">
								Passenger capacity
							</dt>
							<dd
								class="mt-1 text-sm leading-6 text-gray-700 sm:mt-0 sm:text-right"
							>
								{orderDetail.product.passenger_capacity}
							</dd>
						</div>
						<div class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
							<dt class="text-sm font-medium leading-6 text-gray-900">
								Maximum speed
							</dt>
							<dd
								class="mt-1 text-sm leading-6 text-gray-700 sm:mt-0 sm:text-right"
							>
								{orderDetail.product.maximum_speed}
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
		<figure
			class="rounded-sm flex items-center justify-center sm:col-span-5 bg-gray-400 overflow-hidden"
		>
			<img
				class="object-cover h-full w-full"
				src={orderDetail.image}
				alt={orderDetail.product.title}
			/>
		</figure>
	</div>
</div>
