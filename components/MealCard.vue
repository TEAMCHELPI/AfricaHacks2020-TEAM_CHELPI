<template>
  <section class="flex flex-col w-full h-full">
    <div class="meal-card" :style="{ backgroundImage: `url(${meal.meal_image})` }">
      <section v-show="!bare" class="metadata flex flex-col mb-0 flex-grow h-full">
        <section class="flex z-10 mb-auto justify-between flex-wrap p-4">
          <!-- meal rating -->
          <div class="meal-rating">
            <span class="chelpi-icon icon-star"></span>
            <span class="rating ml-2 px-2 bg-orange-600 rounded-full">{{meal.meal_rating}}</span>
          </div>
          <span class="chelpi-icon icon-heart"></span>
        </section>
        <section class="mt-auto flex flex-col justify-end">
          <section class="flex z-10 justify-between w-full h-full mt-auto p-4">
            <!-- Name -->
            <div class="flex space-x-2 items-center">
              <!-- Avatar -->
              <figure v-if="userAvatar" class="w-8 h-8 block overflow-hidden text-xs flex justify-center items-center leading-none text-transparent bg-gray-200 rounded-full">
                <img :src="meal.user_image ? meal.user_image : placeholderImage" class="w-full h-full object-fit object-center" alt="chef avatar"/>
              </figure>
              <p class="font-head text-white font-medium text-sm capitalize">{{meal.user_name}}</p>
            </div>

            <button v-if="pickButton"
                    @click="pickMeal({ name: 'Fabriques' })"
                    class="p-2 hover:shadow-outline hover:text-white hover:bg-brand-primary font-medium px-6 bg-white rounded font-head text-gray-700">
                  Pick
                </button>
            <!-- <button @click.stop="dropMeal(payload)"
                  class="p-2 px-6 hover:shadow-outline bg-brand-primary hover:bg-green-100 font-medium hover:text-brand-primary text-white font-head rounded"
                >
                  Unpick
                </button> -->
          </section>
        </section>
      </section>
      <!-- Overlay on hover -->
      <n-link :to="{name: 'meal-id', params: {id: ${meal.meal_id}}}"
              class="cursor-pointer availability absolute top-0 left-0 h-full w-full justify-center items-center flex transition-all duration-500 bg-black bg-opacity-75 ease-in-out hover:opacity-100 opacity-0 text-white font-medium font-head">
        Open at {2:30pm}
      </n-link>
    </div>
    <div v-show="!bare" class="flex py-3 items-baseline justify-between">
      <span class="leading-normal text-sm font-head font-medium bg-opacity-25 rounded-full px-3 bg-gray-500">{{meal.meal_name}}</span
          ><span
            class="leading-normal text-sm font-head font-medium bg-opacity-25 rounded-full px-3 bg-gray-500"
            >${{meal.meal_price}}</span
          >
        </div>
      </section>

</template>

<script>
import placeholderImage from '~/helper/placeholder-img.js';
  export default {
    name: 'MealCard',
    props: {
      entry: {
        type: Object | Function, required: true,
        default(){
          return {
            picture:'/images/sample/meals/meal001.jpg',
            rating: 4.5,
            owner: {
              name: 'Helpi'
            }
          }
        }
      },
      pickButton: { default: true, type: Boolean, required: false },
      userAvatar: { default: true, type: Boolean, required: false },
      bare: {
        default: false,
        type: Boolean,
        required: false
      }
    },
    created(){
      let res = this.callApi('get', 'user').then(response=>{
        this.meal = response.data.user.restaurant.meal
      })
    },
    data(){
      return {
        meal:{
          meal_image: '/images/sample/meals/meal001.jpg',
          meal_rating: 4.5,
          meal_name: 'Meal name',
          user_name: 'User name',
          user_image:placeholderImage,
          price: 0
        },
        user:{}
      }
    },
    methods: {
      
      pickMeal(payload) {
        this.$eventBus.$emit('pickMeal', payload)
      },
      // Only authenticated users can see this
      dropMeal(payload) {
        this.$eventBus.$emit('dropMeal', payload)
      }
    }
  }

</script>

<style lang="scss" >

  .meal-card {
    min-height: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 2;
    background: theme('colors.gray.800');
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.75s ease-in-out;
    @media screen and (min-width: 600px){
      min-height: 275px;
    }
    &:hover {
      background-size: 200%;
    }
    &:before {
      content: '';
      position: absolute;
      background: hsla(0, 0%, 28%, 0.371);
      background: linear-gradient(to top, rgba(3, 4, 3, 0.563) 10%, rgba(227, 235, 227, 0.282));
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .meal-rating {
      margin-block-start: 0;
      margin-block-end: 0;
      display: flex;
      align-items: center;
      text-align: left;
      font-size: 12px;
      letter-spacing: 0px;
      color: #ffffff;
    }
  }

</style>
