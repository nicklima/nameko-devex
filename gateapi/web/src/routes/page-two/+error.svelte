<script lang="ts">
	import { Breadcrumb } from '@components'
	import { Error } from '@icons'
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
	<div class="rounded p-10 bg-red-100 mt-10 flex align-top gap-5 text-red-600">
		<p><Error /></p>
		<div class="flex flex-col">
			<b>Connection failed!</b>
			<p class="text-red-500">
				We're sorry, but we're having trouble connecting to our server at the
				moment. Please try again later.
			</p>
		</div>
	</div>
</div>
