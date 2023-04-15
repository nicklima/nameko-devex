<script context="module" lang="ts">
	import Arrow from '@icons/arrow.svelte'
	import { ROUTES } from './routes/routes'
</script>

<svelte:head>
	<title>Nameko | Home</title>
</svelte:head>

<main class="flex justify-center items-center h-screen">
	<div>
		<div class="flex w-screen max-w-max px-4">
			<div
				class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
			>
				<div class="p-4">
					{#each ROUTES as { name, path }}
						<a
							href={path}
							class="
								group relative flex gap-x-6 p-2
								hover:bg-gray-50
								items-center
								border-b border-slate-200
								transition-all
								last:border-b-0
							"
						>
							<div
								class="
									mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg
									bg-gray-50
									group-hover:bg-violet-100
									transition-all
									-rotate-90
								"
							>
								<Arrow />
							</div>
							<span class="font-semibold text-lg text-violet-900">{name}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>
