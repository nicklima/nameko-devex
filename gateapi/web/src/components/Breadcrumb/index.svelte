<script lang="ts">
	export let pageName: string = ''
</script>

<nav aria-label="Breadcrumb" class="mb-5">
	<ol class="w-full flex items-center space-x-2">
		<li>
			<div class="flex items-center">
				<a href="/" class="mr-2 text-sm font-medium text-gray-900">Home</a>
				<svg
					width="16"
					height="20"
					viewBox="0 0 16 20"
					fill="currentColor"
					aria-hidden="true"
					class="h-5 w-4 text-violet-800"
				>
					<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
				</svg>
			</div>
		</li>

		<li class="text-sm">
			<span class="font-medium text-gray-500 hover:text-gray-600"
				>{pageName}</span
			>
		</li>
	</ol>
</nav>
