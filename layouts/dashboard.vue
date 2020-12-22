<template>
  <main class="relative">
    <section class="p-4 absolute z-20 left-0 w-full top-0">
      <the-navigation-bar :sidebar="$auth.loggedIn" />
    </section>
    <!-- Sidebar -->
    <the-sidebar v-if="$auth.loggedIn"/>
    <nuxt/>
    <!--  The Footer-->
    <the-footer ></the-footer>    
  </main>
</template>

<script>
import SignUp from '~/components/SignUp.vue'
import TheModal from '~/components/TheModal'

export default {
  name: 'DashboardLayout',
  components: {SignUp, TheModal},
  mounted() {
    this.$eventBus.$on('pickMeal', this.pickMeal)
    this.$eventBus.$on('dropMeal', this.dropMeal)
  },
  destroyed() {
    this.$eventBus.$off()
  },
  data() {
    return {
      modal: {
        component: '',
        payload: '',
        title: ''
      }
    }
  },
  methods:{
    pickMeal(payload) {
      if (!this.$auth.loggedIn) this.revealModal('sign-up')
        else {
          // add to cart
          this.$store.dispatch('addMealToCart', payload);
        }
      },
      placeOrder(){
        this.revealModal('schedule-order', 'Schedule Delivery');
      },
      dropMeal(payload) {
        // if not authenticated
        if (!this.$auth.loggedIn) this.revealModal('sign-up', 'Sign up')
          else {
          // remove from cart
          this.$store.dispatch('removeMealFromCart', payload);
        }
      },
      hideModal(){
        this.$refs.modal.closeModal();
      },
      revealModal(component, title = '', payload = null) {
        try {
          this.modal.component = component
          this.modal.title = title
          this.modal.payload = payload
          this.$refs.modal.toggleModal()
        } catch (e) {
          console.error(e.message)
        }
      }
    }
  }
  </script>

  <style scoped>

  </style>
