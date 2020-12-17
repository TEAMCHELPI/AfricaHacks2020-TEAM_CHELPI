<template>
  <section class="justify-around flex items-start hover:bg-white hover:shadow-sm rounded relative p-3">
      <div class="flex flex-wrap flex-grow justify-between items-start lg:space-x-3 md:space-x-3">
        <div style="max-height: 100px" class="w-full bg-gray-400 lg:w-40 overflow-hidden rounded ">
          <img :src="order.meal_image" class="object-cover  w-full object-center" alt="">
        </div>
        <section class="p-3 flex flex-wrap flex-grow">
          <p class="text-left mr-auto font-head text-xl">
            {{order.meal_name}}
          </p>
          <span class="text-right inline-block  font-head text-xl font-bold text-gray-800">${{order.price}}
          </span>
        </section>
        <button @click.stop="removeFromCart(order)" class="lg:relative md:relative text-white bg-black hover:bg-white rounded p-1 px-2 leading-none  absolute top-0 right-0 cursor-pointer mr-6 ml-auto text-4xl hover:text-red-600">&times;
        </button >
      </div>

  </section>
</template>

<script>
export default {
  name: 'OrderCard',
  props: {
    order: {
      type: Object | Function,
      required: true
    }
  },
  data(){
    return {

    }
  },

  methods:{
    removeFromCart(payload){
      this.$store.dispatch('removeMealFromCart', payload)
    }
  }
}
</script>
