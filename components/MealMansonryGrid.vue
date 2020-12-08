<template>
  <section class="grid-container my-12">
    <div class="meal-grid-item" v-for="n in 30" :key="uuid()">
      <meal-card/>
    </div>
  </section>
</template>

<script>
	import MealCard from "~/components/MealCard.vue";

	export default {
		name: "MealMansonryGrid",
		components: { MealCard},
		data(){
			return {
				modal: {
					component: "",
					payload: "",
					title: "",
				},
      }
    },
		methods: {
		},

	}
</script>

<style scoped>

</style>
