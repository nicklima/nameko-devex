<script lang="ts">
	import {
		Arrow,
		Baths,
		Beds,
		Calendar,
		Condo,
		Dollar,
		House,
		Month,
		Profile,
	} from '@icons'

	export let name: string
	export let label: string
	export let value: string = ''
	export let placeholder: string = ''
	export let maxlength: number = ''
	export let cssClass: string = ''

	export let locale: string = 'en-US'
	export let currency: string = 'USD'

	const formatter = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currency,
	})

	function formatCurrency(value) {
		return formatter.format(value).replace(/[^\d.-]/g, '')
	}

	function handleInput(event) {
		let inputValue = event.target.value.replace(/[^0-9.]/g, '')
		value = formatCurrency(inputValue)
	}
</script>

<label class="block">
	<span class="block text-sm font-medium text-slate-700">{label}</span>
	<span class="relative">
		<span class="absolute inset-y-0 left-0 flex items-center pl-2">
			<Dollar />
		</span>
		<input
			{name}
			{placeholder}
			{maxlength}
			bind:value
			on:change={handleInput}
			type="text"
			class="
				mt-1 px-9 py-4
				font-semibold
				bg-white
				border shadow-sm border-slate-300
				placeholder-slate-400
				focus:outline-none focus:border-violet-500 focus:ring-violet-500 focus:ring-1
				block w-full rounded-md
				sm:text-sm
				{cssClass}
			"
		/>
		<span class="absolute inset-y-0 right-0 flex items-center pr-2">
			<Month />
		</span>
	</span>
</label>
