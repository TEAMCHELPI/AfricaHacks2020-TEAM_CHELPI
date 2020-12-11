<template>

  <section class="min-h-screen pb-12 flex flex-col">
    <section class="relative z-10">
      <section class="p-4  z-20 left-0 w-full top-0">
        <the-navigation-bar :sidebar="$auth.loggedIn" />
      </section>
      <nuxt/>
    </section>

    <section v-if="!completed" class="my-6 lg:w-8/12 mx-auto">
      <order-card :order="{order}"
                  :key="`order-${uuid()}`"
                  v-for="order of 3" />
      <section class="lg:flex md:flex block p-3 my-3 justify-between">
        <strong class="mr-24 font-head text-xl font-bold text-gray-900	">Delivery Fee</strong>
        <p class="flex-auto font-head text-xl font-bold text-gray-800">{$0}</p>
        <section class="flex items-baseline space-x-3">
          <strong class="font-head text-xl font-bold text-gray-900">
    						Total
    					</strong>
          <p class="flex-auto font-head text-xl font-bold text-gray-800">{$40}</p>

        </section>
      </section>
      <section class="p-3">
        <button @click.stop="placeOrder"
                type="button"
                class="p-3 px-12 text-white font-head font-semibold hover:bg-green-600 bg-brand-primary"
                name="button">Place Order</button>
      </section>
    </section>

    <!-- Dispatched -->
    <section v-else class="text-center font-head m-auto lg:w-3/12 md:w-6/12 px-3">
      <header class=" text-2xl  flex items-center space-x-3 justify-center  text-brand-primary">
        <h1>Happy Eating!!</h1>
        <span class="w-6 h-6 block bg-gray-300 rounded-full">
            <img src="/images/emoji/happy.svg" alt="">
          </span>
      </header>
      <p class="p-3 capitalize leading-relaxed">Your Meal Has Been Dispatched To Your Location And Would Arrive In 30 Mins </p>

      <n-link :to="{name: 'explorer'}" class="block font-head mt-3 text-lg p-3 px-6 bg-brand-primary text-white font-semibold hover:bg-green-600">Pick more meals</n-link>
    </section>
  </section>

</template>

<script>

  export default {
    name: 'orders',
    data() {
      return {
        completed: false
      }
    },
    mounted() {
      this.$eventBus.$on('completeOrder', this.completeOrder);
    },
    computed: {
      orders() {
        return [{}]
      }
    },
    methods: {
      placeOrder() {
        this.$eventBus.$emit('placeOrder', this.orders)
      },
      completeOrder(){
        this.completed = true
      }
    }
  }

</script>

<style scoped>

</style>
