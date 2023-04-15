<script lang="ts">
	import { Arrow } from '@icons'

	export let icon: string
	export let name: string
	export let label: string
	export let value: string = ''
	export let cssClass: string = ''

	const handleChoice = (event) => {
		return (value = label)
	}
</script>

<label>
	<input
		type="radio"
		class="hidden appearance-none"
		{name}
		bind:value
		on:change={handleChoice}
	/>
	<div
		class="flex items-center gap-3 border rounded p-5 text-slate-700 transition-all hover:border-violet-400 hover:text-violet-400"
	>
		<svelte:component this={icon} />
		<span class="block text-sm font-medium">{label}</span>
	</div>
</label>

<style>
	input[type='radio'] {
	}

	input[type='radio']:checked + div {
		@apply bg-violet-100;
		@apply text-violet-600;
		@apply border-violet-600;
	}
</style>
