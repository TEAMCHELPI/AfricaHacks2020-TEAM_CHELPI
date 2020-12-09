<template>
  <div>
    <section class="dashboard-hero flex flex-col justify-end relative min-h-screen bg-gray-900"
             :style="{backgroundImage: `url(${banner})`}">
      <span class="bg-black z-0 opacity-75 absolute top-0 left-0 w-full h-full"></span>
      <section class="container px-3 mx-auto mt-auto flex space-x-6 z-10 mb-12">
        <section>
          <span class="user-avatar w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full block"
                :style="{backgroundImage: `url(${avatar})`}"></span>
        </section>
        <section>
          <header class="mb-2"><h1 class="text-2xl text-white font-head font-medium">
            Chef Leint
          </h1>
          <section>
            <span></span>
            <span></span>
          </section>
          </header>
          <p class="text-gray-100 ">Meals at it best, get quality cooked, baked and grilled meals</p>
          <small class="text-gray-200 font-light">Expected Meal Time Preparation: 10min - 20min</small>
        </section>
      </section>
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
		layout: 'dashboard',
		components: { MealMansonryGrid },
		data() {
			return {
				banner: '/images/sample/meals/meal005.jpg'
			}
		},
		computed: {
			avatar() {
				return '/images/sample/chefs/chef002.jpg'
			},
		},
		methods: {
			openLeftSidebar() {
				this.$store.dispatch( "openLeftSidebar" );
			},
		}
	}
</script>

<style scoped>
  .dashboard-hero {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }
</style>
