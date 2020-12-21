<template>

  <div>
    <section class="relative z-10">
      <section class="p-4 absolute z-20 left-0 w-full top-0">
        <the-navigation-bar :sidebar="$auth.loggedIn" />
      </section>
      <nuxt/>
    </section>

    <section class="meal-hero flex flex-col justify-end relative min-h-screen bg-gray-900" :style="{backgroundImage: `url(${banner})`}">
      <span class="bg-black z-0 opacity-75 absolute top-0 left-0 w-full h-full"></span>
      <section class="container px-3 mx-auto mt-auto flex space-x-6 z-10 mb-12">
        <section>
          <span class="user-avatar w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full block" :style="{backgroundImage: `url(${avatar})`}"></span>
        </section>
        <section>
          <header class="mb-2">
            <h1 class="text-2xl text-white font-head font-medium">
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
      <section>
        <header class="flex px-3 my-6 flex-wrap justify-between items-center w-full py-4">
          <section class="flex flex-auto mr-auto items-center space-x-3">
            <span class="font-head lg:text-xl text-right text-gray-900">Top Meals</span>
            <span class="chelpi-icon icon-angle-arrow-down"></span>
          </section>
          <section class="flex items-center space-x-2">
            <button class="px-6 hover:bg-gray-600 py-1 rounded-full bg-gray-400 text-white">
                                        Previous
                                      </button>
            <button class="px-6 hover:bg-gray-600 py-1 rounded-full bg-gray-600 text-white">
                                        Next
                                      </button>
          </section>
        </header>
        <section class="py-3 pb-6">
          <div class="swiper directive"
               v-swiper="topMealsSwiperOption"
               :cleanup-styles-on-destroy="false">
            <div class="swiper-wrapper">
              <div class="swiper-slide"
                   :key="meal.id"
                   v-for="meal in topMeals">
                <meal-card :bare="true"></meal-card>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </section>
      </section>

      <section>
        <header class="flex px-3 my-3 flex-wrap justify-between items-center w-full">
          <section class="w-full block lg:hidden md:hidden">
            <label for="meal-search-input" class="form-input  focus:shadow-outline my-3 rounded-full flex items-center bg-opacity-25 bg-gray-300">
              <span class="chelpi-icon icon-magnifying-glass text-gray-200"></span>
              <input type="text" name="" id="meal-search-input" class="w-full ml-2 bg-transparent font-head capitalize form-input py-0 border-none focus:shadow-none " placeholder="search menu"/>
            </label>
          </section>
          <section class="flex flex-wrap-reverse flex-auto mr-auto items-center lg:space-x-6">

            <div class="flex items-baseline space-x-3">
              <span class="font-head lg:text-2xl text-right text-gray-900">Menu</span>
              <span class="chelpi-icon icon-angle-arrow-down icon-xs"></span>
            </div>
            <label for="meal-search-input" class="form-input hidden md:block lg:block focus:shadow-outline my-3 rounded-full flex items-center bg-opacity-25 bg-gray-300">
              <span class="chelpi-icon icon-magnifying-glass text-gray-200"></span>
              <input type="text" name="" id="meal-search-input" class="ml-2 bg-transparent font-head capitalize form-input py-0 border-none focus:shadow-none " placeholder="search menu"/>
            </label>
          </section>
          <section class="flex items-center text-right  py-3 items-center space-x-3">
            <span class="chelpi-icon icon-utencil text-green-600 icon-lg"></span>
            <span class="font-head lg:text-xl">Meals picked</span>
            <span class="leading-none px-3 p-1 rounded-full text-xs bg-gray-500 bg-opacity-25">{{cart.total}}</span>
          </section>

        </header>
        <section class="pb-12">
          <meal-mansonry-grid :entries="meals"></meal-mansonry-grid>
        </section>
      </section>
    </section>

  </div>

</template>

<script>

  import MealMansonryGrid from '~/components/MealMansonryGrid'

  export default {
    name: '_meal.vue',
    components: { MealMansonryGrid },
    data() {
      return {
        banner: '/images/sample/meals/meal005.jpg',
        chefsNearby: [{}, {}, {}, {}, {}],
        topMealsSwiperOption: {
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
      avatar() {
        return '/images/sample/chefs/chef002.jpg'
      },
      meals() {
        return [{}, {}, {}, {}, {}]
      },
      topMeals() {
        return [{}, {}]
      },
      cart() {
        return this.$store.getters['getCart']
      }
    }
  }

</script>
<style scoped>

  .meal-hero {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }

</style>
