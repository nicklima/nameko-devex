<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import flatpickr from 'flatpickr'
	import { Calendar } from '@icons'

	let picker

	onMount(() => {
		picker = flatpickr('#datepicker', {
			dateFormat: 'm/d/Y',
		})
		picker.calendarContainer.classList.add('svelte-1wa3zi1') // Add Svelte class
	})

	onDestroy(() => {
		picker?.destroy()
	})

	export let name: string
	export let label: string
	export let value: string = ''
	export let placeholder: string = ''
	export let cssClass: string = ''
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
	/>
	<link
		rel="stylesheet"
		type="text/css"
		href="https://npmcdn.com/flatpickr/dist/themes/material_green.css"
	/>
</svelte:head>

<label class="block">
	<span class="block text-sm font-medium text-slate-700">{label}</span>
	<span class="relative">
		<span
			class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
		>
			<Calendar />
		</span>
		<input
			{name}
			{placeholder}
			bind:value
			id="datepicker"
			class="
				mt-1 p-4 pl-9 ml-1
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
	</span>
</label>
