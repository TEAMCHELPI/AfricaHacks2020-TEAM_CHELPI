<template>

  <div>
    <!-- Hero section -->
    <section class="min-h-screen flex flex-col p-6 lg:px-12 bg-gray-900">
      <section class="container mx-auto h-full m-auto">
        <header class="py-4 block">
          <h1 class="lg:text-5xl text-4xl font-head text-white">
            Hungry? Find Nearby Chefs And Meals
          </h1>
        </header>

        <form @submit.prevent="searchMeal" class="grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          <label class="form-input sharp flex items-center space-x-3 rounded-none" for="search-box">
            <span class="chelpi-icon icon-magnifying-glass"></span>
            <input
            id="search-box"
            type="text"
            required
            class="form-input borderless focus:shadow-none font-head "
            placeholder="Enter dish name"
            />
          </label>

          <label class="my-auto form-input space-x-3 flex  items-center rounded-none" for="schedule-delivery">
            <span class="chelpi-icon icon-date"></span>
            <select
            id="schedule-delivery"
            name="schedule-delivery"
            class="form-select borderless text-gray-600 font-head border-none flex-auto m-0 focus:shadow-none">
              <option value="">Schedule delivery type</option>
              <option value="now">Now</option>
              <option value="later">Later</option>
            </select>
          </label>

          <label class="" for="search-button">
            <button id="search-button" class="py-3 text-white font-medium px-8 bg-brand-primary" type="submit">
              Find Meals
            </button>
          </label>
        </form>
      </section>
    </section>

  <section class="container mx-auto py-6 px-3 relative z-0">
    <header class="flex flex-wrap justify-between w-full py-2">
      <!-- Meals nearby -->
      <section class="flex flex-auto mr-auto py-3 items-center space-x-3">
        <span class="font-head lg:text-xl text-right">Meals Nearby</span>
        <!-- <span class="chelpi-icon icon-angle-arrow-down"></span> -->
      </section>

      <!-- Meals picked -->
      <section class="flex text-right py-3 items-center space-x-3">
        <span class="chelpi-icon icon-utencil text-green-600 icon-lg"></span>
        <span class="font-head lg:text-xl"> Meals picked</span>
        <span class="leading-none px-3 p-1 rounded-full text-xs bg-gray-500 bg-opacity-25">
        {{cart.total}}</span>
      </section>
    </header>

    <!--    TODO:  Grid-->
    <meal-mansonry-grid :entries="meals"></meal-mansonry-grid>
    <!-- Chefs near by -->
    <section>
      <header class="flex flex-wrap justify-between items-center w-full py-4">
        <section class="flex flex-auto mr-auto items-center space-x-3">
          <span class="font-head lg:text-xl text-right text-gray-900"
          >Chefs Nearby</span
          >
          <span class="w-4 h-4 block bg-gray-300 rounded-full"></span>
        </section>
        <section class="flex items-center space-x-1">
          <button class="px-6 hover:bg-gray-600 py-1 bg-gray-400 text-white">
            Previous
          </button>
          <button class="px-6 hover:bg-gray-600 py-1 bg-gray-600 text-white">
            Next
          </button>
        </section>
      </header>

      <section class="py-6">
        <div class="swiper directive"
        v-swiper="chefsNearbySwiperOption"
        :cleanup-styles-on-destroy="false">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
          :key="meal.id"
          v-for="meal in nearBy">
          <!-- TODO: Meal data entry -->
          <meal-card :entry="meal" :userAvatar="false" :pickButton="false" />
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

import MealCard from '~/components/MealCard.vue'
import TheNavigationBar from '~/components/TheNavigationBar.vue'
import MealMansonryGrid from '../components/MealMansonryGrid'

export default {
  components: { MealMansonryGrid, TheNavigationBar, MealCard },
  name: 'Explorer',
  data() {
    return {
      chefsNearby: [{}, {}, {}, {}, {}],
      chefsNearbySwiperOption: {
        spaceBetween: 10,
        mousewheel: true,
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 3,
              spaceBetween: 40
            }, 1024 : {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }
        }
      }
    },
    computed: {
      meals() {
        return [{}, {}, {}, {}, {}]
      },
      nearBy() {
        return [{}, {}]
      },
      cart() {
        return this.$store.getters['getCart']
      }
    },
    methods: {
      searchMeal() {}
    }
  }

  </script>
