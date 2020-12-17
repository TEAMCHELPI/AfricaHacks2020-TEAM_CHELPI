<template>

  <section class="min-h-screen pb-12 flex flex-col">
    <section class="relative z-10">
      <section class="p-4  z-20 left-0 w-full top-0">
        <the-navigation-bar :sidebar="$auth.loggedIn" />
      </section>
      <nuxt/>
    </section>

    <section v-if="!completed" class="my-6 lg:w-10/12 flex flex-col h-full flex-grow  mx-auto">
      <!-- Order listing -->
      <template id="order-listing" v-if="orders.length">
                <order-card :order="order"
                :key="`order-${uuid()}`"
                v-for="order of orders" ></order-card>
          <!-- Cost summary -->
                <section class="lg:flex bg-white rounded md:flex block p-3 my-3 justify-between">
                  <section class="flex items-baseline space-x-3">
                  <strong class="mr-24 font-head text-xl font-medium text-gray-900	">
                    Delivery Fee
                  </strong>
                  <p class="flex-auto font-head text-2xl font-medium text-gray-800">
                    $2.55
                  </p>
                </section>
                  <section class="flex items-baseline space-x-3">
                    <strong class="font-head text-xl font-medium text-gray-900">
                    Total
                    </strong>
                    <p class="flex-auto font-head text-2xl font-medium text-gray-800">
                      {{cartTotal}}
                    </p>
                  </section>
                </section>
                <section class="p-3">
                  <button @click.stop="placeOrder"
                  type="button"
                  class="p-4 px-8 text-white text-xl font-head font-medium hover:bg-green-600 bg-brand-primary leading-none"
                  name="button">
                    Place Order
                  </button>
                </section>
              </template>
      <template id="order-empty" v-else>
                <section class="lg:w-6/12 md:w-6/12 m-auto text-center">
                  <header class="mb-3">
                    <h1 class="font-head text-4xl">Nothing Found!</h1>
                  </header>
                  <p class="mb-6 font-head text-lg tracking-wide font-light">You have not added any meals yet</p>
                  <n-link :to="{name: 'explorer'}" type="button" name="button" class="bg-brand-primary p-5 block leading-none px-12 text-white text-xl font-head hover:bg-green-600">Explore</n-link>
                </section>
              </template>
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

      <n-link :to="{name: 'explorer'}" class="block font-head mt-3 text-lg p-3 px-6 bg-brand-primary text-white font-semibold hover:bg-green-600">
        Pick more meals
      </n-link>
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
      this.$eventBus.$on('completeOrder', this.completeOrder)
    },
    computed: {
      orders() {
        return this.$store.getters['getCart'].orders
      },
      cartTotal() {
        let orders = this.orders
        return this.orders.reduce((accumulator, currentValue) => {
          return Number(accumulator + currentValue.price)
        }, 0)
      }
    },
    methods: {
      placeOrder() {
        this.$eventBus.$emit('placeOrder', this.orders)
      },
      completeOrder() {
        this.completed = true
      }
    }
  }

</script>

<style scoped>

</style>
