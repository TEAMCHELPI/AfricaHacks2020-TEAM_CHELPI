<template>

  <div class="relative min-h-screen pt-24 p-3 container mx-auto">
    <!-- if user has no restaurant -->
    <section></section>

    <!-- User has created virtual restaurant -->
    <section class="block">
      <header id="mast-head" class="dashboard-hero">
        <button class="block font-head p-2 px-6 bg-brand-primary text-white font-medium hover:bg-green-600">
          Setup your banner
        </button>
      </header>

<!-- Top meals -->
      <section>
        <!-- Header -->
        <header class="flex  mt-6 flex-wrap justify-between items-baseline w-full">
          <section class="flex flex-auto mr-auto items-center space-x-3">
            <span class="font-head text-xl text-right text-gray-900">Top Meals</span>
            <!-- <span class="chelpi-icon icon-angle-arrow-down"></span> -->
          </section>
          <section class="flex items-center space-x-1">
            <button class="px-6 hover:bg-gray-600 py-1  bg-gray-400 text-white">
              Previous
            </button>
            <button class="px-6 hover:bg-gray-600 py-1 bg-gray-600 text-white">
              Next
            </button>
          </section>
        </header>

        <!-- Body -->
        <section class="flex py-3 pb-6 flex-wrap  w-full">
          <section class="w-full lg:w-3/12 py-2 lg:pr-2">
            <div class="dummy-meal-card flex flex-col items-center justify-end">
              <button class="block font-head p-2 px-6 bg-brand-primary text-white font-medium hover:bg-green-600">
                Add Meal
              </button>
            </div>
          </section>
          <section class="w-full lg:w-auto py-2 flex-auto  ">
            <div class="swiper directive"
            v-swiper="topMealsSwiperOption"
            :cleanup-styles-on-destroy="true">
              <div class="swiper-wrapper">
                <div class="swiper-slide "
                :key="meal.id"
                v-for="(meal, index) in topMeals">
                  <button class="absolute top-0 right-0 mx-3 my-2 text-white p-1 px-2 rounded-full bg-gray-800 leading-none z-20 text-xl">&times;</button>
                  <section class="relative bg-red-500 z-0">
                    <meal-card :bare="true" entry="{}"></meal-card>
                  </section>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </section>
        </section>
      </section>

      <!-- Meals -->
      <section class="w-full">
        <header class="flex flex-wrap justify-between w-full py-2">
        <!-- Meals nearby -->
          <section class="flex flex-auto mr-auto justify-between items-baseline space-x-3">
            <span class="font-head text-xl text-right">Menu</span>
            <button @click.stop="addMealToMenu" class="block font-head mt-3 p-2 px-6 bg-brand-primary text-white font-medium hover:bg-green-600">
              Add meals
            </button>
          </section>
        </header>
        <meal-mansonry-grid :entries="meals" :admin="true"></meal-mansonry-grid>
      </section>
    <section>
  </section>
</section>
</div>

</template>

<script>
export default {
  name: 'index',
  layout: 'dashboard',
  data() {
    return {
      banner: '/images/sample/meals/meal005.jpg',
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
              slidesPerView: 3,
              spaceBetween: 40
            }
          }
        }
      }
    },
    computed: {
      user() {
        return this.$auth.user
      },
      meals() {
        return [{}, {}, {}, {}, {}]
      },
      topMeals() {
        return [{}]
      },
    },
    methods: {
      addMealToMenu(){
        this.$eventBus.$emit('beginMealSetup');
      },
      openLeftSidebar() {
        this.$store.dispatch('openLeftSidebar')
      }
    }
  }

  </script>

  <style >
  #mast-head{
    height: 300px;
    background: rgba(10,10,10, .07) 0% 0% no-repeat padding-box;
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: flex-start;
    justify-content: flex-end;
  }
  .dummy-meal-card{
    width: 100%;
    min-height: 200px;
    padding: 16px;
    background: #EDEDED 0% 0% no-repeat padding-box;
    @media screen and (min-width: 600px) {
      min-height: 275px;
    }
  }
  .dashboard-hero {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }

  </style>
