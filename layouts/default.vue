<template>

  <main>
     <section class="p-4 absolute z-20 left-0 w-full top-0">
      <the-navigation-bar :sidebar="$auth.loggedIn" />
    </section>
      <Nuxt />
    <the-sidebar v-if="$auth.loggedIn"/>
    
    <!--  The Footer-->
    <the-footer />

    <!--    Modal-->
    <the-modal ref="modal">
      <template>
            <component
              :is="modal.component"
              :component="modal.component"
              :payload="modal.payload"
            >
            </component>
          </template>
    </the-modal>
    
  </main>

</template>


<script>

  import SignUp from '~/components/SignUp.vue'
  import TheModal from '~/components/TheModal'
  import ScheduleOrder from '~/components/order/ScheduleOrder'

  export default {
    name: 'DefaultLayout',
    components: { SignUp, TheModal, ScheduleOrder },
    mounted() {
      this.$eventBus.$on('pickMeal', this.pickMeal)
      this.$eventBus.$on('dropMeal', this.dropMeal)
      this.$eventBus.$on('hideModal', this.hideModal)
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
    methods: {     
      pickMeal(payload) {
        // if not authenticated
        if (!this.$auth.loggedIn) this.revealModal('sign-up')
        else {
          // add to cart
          this.$store.dispatch('addMealToCart', payload);
        }
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
      revealModal(component, title = 'Untitled', payload = null) {
        try {
          this.modal.component = component
          this.modal.title = title
          this.modal.payload = payload
          this.$refs.modal.toggleModal()
        } catch (e) {
          console.error(e.message)
        }
      }
    },
    middleware: ['helper']
  }

</script>
