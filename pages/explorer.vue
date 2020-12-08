<template>
  <div>
    <!-- Hero section -->
    <section class="min-h-screen flex flex-col p-6 lg:px-12 bg-gray-900">
      <the-navigation-bar></the-navigation-bar>
      <section class="container mx-auto h-full m-auto">
        <header class="py-4 block">
          <h1 class="lg:text-5xl text-4xl font-head text-white">
            Hungry? Find Nearby Chefs And Meals
          </h1>
        </header>

        <section
          class="grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4 my-4"
        >
          <label
            class="form-input flex items-center py-1 rounded-none"
            for="search-box"
          >
            <span class="w-4 h-4 block mr-3 bg-gray-300"></span>
            <input
              id="search-box"
              type="text"
              class="form-input border-none m-0 focus:outline-none focus:shadow-none"
              placeholder="Enter Delivery Address"
            />
          </label>

          <label
            class="form-input flex py-1 items-center rounded-none"
            for="schedule-delivery"
          >
            <span class="w-4 h-4 mr-3 block bg-gray-300"></span>

            <input
              id="schedule-delivery"
              placeholder="Schedule Delivery"
              name="schedule-delivery"
              class="form-input border-none flex-auto m-0 focus:shadow-none"
            />
            <span class="w-4 h-4 block bg-gray-300"></span>
          </label>

          <label class="flex items-center flex-auto" for="search-button">
            <button id="search-button" class="p-3 text-white font-medium px-8 bg-brand-primary">
              Find Meals
            </button>
          </label>
        </section>
      </section>
    </section>

    <section class="container mx-auto">
      <header class="flex flex-wrap justify-between w-full py-2">
        <section class="flex flex-auto mr-auto p-4 items-center space-x-3">
          <span class="font-head lg:text-xl text-right">Meals Nearby</span>
          <span class="w-4 h-4 block bg-gray-300 rounded-full"></span>
        </section>
        <section class="flex text-right p-4 items-center space-x-3">
          <span class="w-8 h-8 block bg-gray-300 rounded-full"></span>
          <span class="font-head lg:text-xl"> Meals picked</span>
          <span
            class="leading-none px-4 pb-1 rounded-full text-xs bg-gray-500 bg-opacity-25"
          >4</span
          >
        </section>
      </header>

      <!--      Grid-->
      <meal-mansonry-grid></meal-mansonry-grid>
      <!-- Chefs near by -->
      <section>
        <header class="flex flex-wrap justify-between items-center w-full py-4">
          <section class="flex flex-auto mr-auto items-center space-x-3">
            <span class="font-head lg:text-xl text-right text-gray-900"
            >Chefs Nearby</span
            >
            <span class="w-4 h-4 block bg-gray-300 rounded-full"></span>
          </section>
          <section class="flex items-center space-x-2">
            <button
              class="px-6 hover:bg-gray-600 py-1 rounded-full bg-gray-600 text-white"
            >
              Previous
            </button>
            <button
              class="px-6 hover:bg-gray-600 py-1 rounded-full bg-gray-600 text-white"
            >
              Next
            </button>
          </section>
        </header>

        <section class="py-6">
          <div
            class="swiper directive"
            v-swiper="chefsNearbySwiperOption"
            :cleanup-styles-on-destroy="false"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                :key="uuid()"
                v-for="chef in chefsNearby"
              >
                <meal-card/>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
	import MealCard from "~/components/MealCard.vue";
	import TheNavigationBar from "~/components/TheNavigationBar.vue";
	import MealMansonryGrid from "../components/MealMansonryGrid";

	export default {
		components: { MealMansonryGrid, TheNavigationBar, MealCard },
		name: "Explorer",
		data() {
			return {
				chefsNearby: [ {}, {}, {}, {}, {} ],
				chefsNearbySwiperOption: {
					spaceBetween: 10,
					mousewheel: true,
					slidesPerView: 3,
				},

			};
		},
	};
</script>
<style lang="scss">

</style>
