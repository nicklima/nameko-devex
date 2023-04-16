<script lang="ts">
	import { createForm } from 'svelte-forms-lib'
	import { formSchema } from './validation'
	import {
		Breadcrumb,
		ErrorMsg,
		InputChoice,
		InputDate,
		InputMoney,
		InputNumber,
		InputSelect,
		InputSimple,
	} from '@components'
	import { Baths, Beds, Condo, House, Profile } from '@icons'

	export const typeOptions = [
		{ type: 'Single-Family', icon: House },
		{ type: 'Multi-Family', icon: Condo },
		{ type: 'Townhome', icon: House },
		{ type: 'Condo', icon: Condo },
	]

	const { form, errors, handleSubmit } = createForm({
		initialValues: {} as FormData,
		validationSchema: formSchema,
		onSubmit: (values) => console.log(values),
	})
</script>

<svelte:head>
	<title>Nameko | Property details</title>
</svelte:head>

<div class="flex mx-auto flex-col align-center max-w-4xl p-5">
	<Breadcrumb pageName="Property details" />
	<form on:submit={handleSubmit} class="grid grid-cols-12 gap-5 pt-16">
		<div class="col-span-12 md:col-span-6">
			<h1 class="text-3xl">Property details</h1>
			<p class="my-5">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam.
			</p>
			<div class="flex w-full gap-5 flex-col">
				<InputSimple
					label="Property Name"
					name="propertyName"
					cssClass="mt-4"
					error={$errors.propertyName}
					bind:value={$form.propertyName}
				/>

				<InputSimple
					label="Address"
					name="address"
					placeholder="21 Jump Street, Los Angeles, California"
					cssClass="block mt-4"
					error={$errors.address}
					bind:value={$form.address}
				/>
			</div>
		</div>
		<figure class="col-start-8 col-end-13 hidden md:block">
			<img src="figure-house.svg" alt="" class="w-full" />
		</figure>

		<div class="flex justify-between items-center col-span-12">
			<span class="col-span-12 block text-sm font-medium text-slate-700"
				>Property Type</span
			>
			<ErrorMsg error={$errors.propertyType} />
		</div>
		<div class="col-span-12 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
			{#each [...typeOptions] as option}
				<InputChoice
					icon={option.icon}
					label={option.type}
					name="propertyType"
					error={$errors.propertyType}
					bind:value={$form.propertyType}
				/>
			{/each}
		</div>

		<span class="col-span-12 block text-sm font-medium text-slate-700"
			>Unit info</span
		>
		<div class="col-span-12 border-slate-300 border rounded p-5">
			<div class="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-5">
				<InputSimple
					label="Unit Name"
					name="unitName"
					placeholder="Name and/or number"
					error={$errors.unitName}
					bind:value={$form.unitName}
				/>
				<InputMoney
					label="Rents"
					name="rents"
					maxlength={10}
					error={$errors.rentValue}
					bind:value={$form.rentValue}
				/>
				<InputMoney
					label="Deposit"
					name="deposit"
					maxlength={10}
					error={$errors.depositValue}
					bind:value={$form.depositValue}
				/>
				<InputNumber
					label="Lease Length (months)"
					name="leaseLength"
					maxlength={3}
					error={$errors.leaseLength}
					bind:value={$form.leaseLength}
				/>
			</div>
			<div class="grid sm:grid-cols-3 md:grid-cols-5 gap-5">
				<InputSelect
					label="Beds"
					icon={Beds}
					name="beds"
					options={[1, 2, 3, '4+']}
					error={$errors.beds}
					bind:value={$form.beds}
				/>
				<InputSelect
					label="Baths"
					icon={Baths}
					name="baths"
					options={[1, 2, 3, 4, '5+']}
					error={$errors.baths}
					bind:value={$form.baths}
				/>
				<InputNumber
					label="Sq. Ft."
					name="sqFt"
					maxlength={6}
					error={$errors.sqFt}
					bind:value={$form.sqFt}
				/>
				<InputDate
					label="Available On"
					name="availableOn"
					placeholder="Select a date"
					error={$errors.availableOn}
					bind:value={$form.availableOn}
				/>
				<InputSelect
					label="Vacancy"
					icon={Profile}
					name="vacancy"
					options={['Option 1', 'Option 2', 'Option 3', 'Option 3']}
					error={$errors.vacancy}
					bind:value={$form.vacancy}
				/>
			</div>
		</div>
		<div class="flex w-full mt-8 justify-between col-span-12">
			<a
				href="/"
				class="py-3 px-8 rounded-full border bg-transparent border-slate-500 transition-all text-slate-500 uppercase hover:text-slate-900 hover:border-slate-900 font-thin"
				>Back</a
			>
			<button
				type="submit"
				class="py-3 px-8 rounded-full bg-violet-700 text-white uppercase transition-all hover:bg-violet-900 font-thin"
				>Continue</button
			>
		</div>
	</form>
</div>
