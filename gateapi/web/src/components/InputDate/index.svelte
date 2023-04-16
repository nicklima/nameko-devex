<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import flatpickr from 'flatpickr'
	import 'flatpickr/dist/flatpickr.min.css'
	import 'flatpickr/dist/themes/material_green.css'

	import { Calendar } from '@icons'
	import { ErrorMsg } from '@components'

	export let name: string
	export let label: string
	export let value: string = ''
	export let error: string = ''
	export let placeholder: string = ''
	export let cssClass: string = ''

	let picker
	onMount(() => {
		picker = flatpickr('#datepicker_input', {
			dateFormat: 'm/d/Y',
			onChange: function (_, dateStr) {
				value = dateStr
			},
		})
		picker.calendarContainer.classList.add('svelte-calendar') // Add Svelte class
	})

	onDestroy(() => {
		picker?.destroy()
	})

	const openCalendar = () => picker?.open()
	const handleInput = () => (value = '')
</script>

<label class="flex flex-col">
	<span class="block text-sm font-medium text-slate-700">{label}</span>
	<div class="relative" id="datepicker_input">
		<span
			class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
		>
			<Calendar />
		</span>
		<input
			{name}
			{placeholder}
			bind:value
			on:focus={openCalendar}
			on:input={handleInput}
			maxlength="10"
			aria-hidden
			autocomplete="off"
			class="
				mt-1 p-4 pl-9 ml-1
				font-light
				bg-white
				border shadow-sm
				placeholder-slate-400
				focus:outline-none focus:border-violet-500 focus:ring-violet-500 focus:ring-1
				block w-full rounded-md
				sm:text-sm
				{cssClass}
				{!!error ? 'border-red-500' : 'border-slate-300'}
			"
		/>
	</div>
	<ErrorMsg {error} />
</label>
