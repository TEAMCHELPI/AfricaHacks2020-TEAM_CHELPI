<template>
	<!---Add meal-->
	<section class="bg-white lg:p-8 p-3"> 
		<form class="">
			<label for="meal-picture" class="block font-head font-medium mb-4">
				<span class="block mb-3">
					Upload Meals
				</span>
				<input type="file" name="meal-picture" id="meal-picture" class="form-input" placeholder="Upload">
			</label>

			<label for="meal-price" class="block font-head font-medium mb-4">
				<span class="block mb-3">
					Add price
				</span>
				<input type="text" name="meal-price" id="meal-price" class="form-input w-full block">
			</label>

			<label for="meal-name" class="block font-head font-medium mb-4">
				<span class="block mb-3">
					Add Meal Name
				</span>

				<input type="text" name="meal-name" id="meal-name" class="form-input w-full block"></label>


				<section class="flex justify-end">
					<button type="submit" class="block font-head mt-3 p-2 px-6 bg-brand-primary text-white font-medium hover:bg-green-600">Setup meal</button>
				</section>
			</form>
		</section>
	</template>
	<script>
	export default {
		name: 'Add-Meal'
	}
	</script>