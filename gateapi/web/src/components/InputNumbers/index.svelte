<script lang="ts">
	export let name: string
	export let label: string
	export let value: string = ''
	export let placeholder: string = ''
	export let maxlength: number = null
	export let cssClass: string = ''

	function handleInput(event) {
		value = event.target.value.replace(/[^0-9.]/g, '')
	}
</script>

<label class="block">
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
</label>
