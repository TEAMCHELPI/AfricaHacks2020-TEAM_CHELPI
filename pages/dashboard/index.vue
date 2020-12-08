<template>
  <div>
    <section class="dashboard-hero relative min-h-screen bg-gray-900"
    :style="{backgroundImage: `url(${banner})`}">
      <span class="bg-black opacity-75 absolute top-0 left-0 w-full h-full"></span>
    </section>
    <section class="container mx-auto">
      <meal-mansonry-grid></meal-mansonry-grid>
    </section>

  </div>
</template>

<script>
	import MealMansonryGrid from "~/components/MealMansonryGrid";
	export default {
		name: "index",
		components: { MealMansonryGrid },
    data(){
			return {
				banner: '/images/sample/meals/meal005.jpg'
      }
    },
		layout: 'dashboard',
		methods: {
			openLeftSidebar() {
				this.$store.dispatch( "openLeftSidebar" );
			},
		}
	}
</script>

<style scoped>
.dashboard-hero{
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
</style>
