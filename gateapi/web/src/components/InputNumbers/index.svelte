<script lang="ts">
	import { ErrorMsg } from '@components'

	export let name: string
	export let label: string
	export let value: string = ''
	export let error: string = ''
	export let placeholder: string = ''
	export let maxlength: number = null
	export let cssClass: string = ''

	const handleInput = (event) =>
		(value = event.target.value.replace(/[^0-9.]/g, ''))
</script>

<label class="flex flex-col">
	<span class="block text-sm font-medium text-slate-700">{label}</span>
	<input
		{name}
		{placeholder}
		{maxlength}
		bind:value
		on:input={handleInput}
		type="text"
		class="
			mt-1 p-4
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
	<ErrorMsg {error} />
</label>
