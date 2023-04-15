<script lang="ts">
	import {
		InputSimple,
		InputMoney,
		InputSelect,
		InputDate,
		InputChoice,
		InputNumber,
	} from '@components'
	import {
		Arrow,
		Baths,
		Beds,
		Condo,
		Dollar,
		House,
		Month,
		Profile,
	} from '@icons'

	export const typeOptions = [
		{
			type: 'Single-Family',
			icon: House,
		},
		{
			type: 'Multi-Family',
			icon: Condo,
		},
		{
			type: 'Townhome',
			icon: House,
		},
		{
			type: 'Condo',
			icon: Condo,
		},
	]

	let formData = {}
	$: console.log(formData)
</script>

<div class="flex mx-auto flex-col align-center max-w-4xl p-5">
	<form action="" class="grid grid-cols-12 gap-5 pt-20">
		<div class="col-span-12 md:col-span-6">
			<h3 class="text-3xl">Property details</h3>
			<p class="mt-5">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam.
			</p>
			<InputSimple
				label="Property Name"
				name="propertyName"
				cssClass="mt-8"
				bind:value={formData.propertyName}
			/>
			<InputSimple
				label="Address"
				name="address"
				placeholder="21 Jump Street, Los Angeles, California"
				cssClass="block mt-4"
				bind:value={formData.address}
			/>
		</div>
		<figure class="col-start-8 col-end-13 hidden md:block">
			<img src="figure-house.svg" alt="" class="w-full" />
		</figure>

		<span class="col-span-12 block text-sm font-medium text-slate-700"
			>Property Type</span
		>
		<div class="col-span-12 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
			{#each [...typeOptions] as option}
				<InputChoice
					icon={option.icon}
					label={option.type}
					name="propertyType"
					bind:value={formData.propertyType}
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
					bind:value={formData.unitName}
				/>

				<InputMoney
					label="Rents"
					name="rents"
					bind:value={formData.rentValue}
				/>
				<InputMoney
					label="Deposit"
					name="deposit"
					bind:value={formData.depositValue}
				/>
				<InputSimple
					label="Lease Length (months)"
					name="leaseLength"
					bind:value={formData.leaseLength}
				/>
			</div>
			<div class="grid sm:grid-cols-3 md:grid-cols-5 gap-5">
				<InputSelect
					label="Beds"
					icon={Beds}
					name="beds"
					options={[1, 2, 3, '4+']}
					bind:value={formData.beds}
				/>
				<InputSelect
					label="Baths"
					icon={Baths}
					name="baths"
					options={[1, 2, 3, 4, '5+']}
					bind:value={formData.baths}
				/>
				<InputNumber label="Sq. Ft." name="sqFt" bind:value={formData.sqFt} />
				<InputDate
					label="Available On"
					name="availableOn"
					bind:value={formData.availableOn}
				/>
				<InputSelect
					label="Vacancy"
					icon={Profile}
					name="vacancy"
					options={['a', 'b', 'c', 'd']}
					bind:value={formData.vacancy}
				/>
			</div>
		</div>
	</form>

	<div class="flex w-full mt-8 justify-between">
		<button
			class="py-3 px-8 rounded-full border bg-transparent border-slate-500 transition-all text-slate-500 uppercase hover:text-slate-900 hover:border-slate-900 font-thin"
			>Back</button
		>
		<button
			class="py-3 px-8 rounded-full bg-violet-700 text-white uppercase transition-all hover:bg-violet-900 font-thin"
			>Continue</button
		>
	</div>
</div>
