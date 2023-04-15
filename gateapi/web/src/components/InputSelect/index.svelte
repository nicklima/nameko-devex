<script lang="ts">
	import type { SvelteComponent as Component } from 'svelte'
	import { Arrow } from '@icons'

	export let icon: typeof Component
	export let name: string
	export let label: string
	export let options: (string | number)[]
	export let value: string = ''
	export let cssClass: string = ''
</script>

<label class="block">
	<span class="block text-sm font-medium text-slate-700">{label}</span>
	<span class="relative overflow-hidden">
		<span
			class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
		>
			<svelte:component this={icon} />
		</span>
		<select
			{name}
			bind:value
			class="			
				appearance-none
				mt-1 ml-1 p-4 pl-9
				font-semibold
				bg-white
				border shadow-sm border-slate-300
				placeholder-slate-400
				focus:outline-none focus:border-violet-500 focus:ring-violet-500 focus:ring-1
				block w-full rounded-md
				sm:text-sm
				{cssClass}
			"
		>
			<option value="" selected disabled>Select</option>
			{#each [...options] as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
		<span
			class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
		>
			<span class="bg-white">
				<Arrow />
			</span>
		</span>
	</span>
</label>
