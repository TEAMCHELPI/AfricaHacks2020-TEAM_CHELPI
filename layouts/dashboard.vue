<template>

  <main class="relative">
    <section class="p-4 absolute z-50 left-0 w-full top-0">
      <the-navigation-bar :sidebar="$auth.loggedIn" />
    </section>
         <!-- Sidebar -->
      <the-sidebar v-if="$auth.loggedIn"/>
    <section class="relative z-10">
     

      <!-- Main -->
      <section class="relative z-0">        
        <nuxt/>
         <!--  The Footer-->
          <the-footer />
      </section>
    </section>
     
    <!--    Modal-->
    <the-modal ref="modal">
      <template #title>{{ modal.title }}</template>
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
  import TheSidebar from '~/components/TheSidebar'
  import CreateRestaurant from '~/components/restaurant/CreateRestaurant'
  export default {
    name: 'DashboardLayout',
    components: { TheSidebar, SignUp, TheModal, CreateRestaurant },
    mounted() {
      this.setUserData();
      this.$eventBus.$on('pickMeal', this.pickMeal)
      this.$eventBus.$on('dropMeal', this.dropMeal)
      this.$eventBus.$on('placeOrder', this.placeOrder)
      this.$eventBus.$on('hideModal', this.hideModal);
      this.$eventBus.$on('createRestaurant', this.createRestaurant)
      this.$eventBus.$on('finishCreatingRestaurant', this.finishCreatingRestaurant)
    },
    destroyed() {
      this.$eventBus.$off()
    },
    computed: {
      user() {
        if(this.$auth.loggedIn)return this.$auth.user
          return null
      }
    },
    data() {
      return {
        showCreationWizard: false,
         modal: {
          component: '',
          payload: '',
          title: ''
        }
      }
    },
    methods: {
      setUserData(){
        if(this.$auth.loggedIn){
          let userID = this.$auth.user.sub;
          if(!this.$store.getters['user']){
            // try getting the user from the firebase db

            // if the user does not exist

            // create the user information
          }
        }
      },
       createRestaurant(){
        this.showCreationWizard = true;
      },
      finishCreatingRestaurant(){
        this.showCreationWizard = true;        
      },
      pickMeal() {
        if (!this.$auth.loggedIn) this.revealModal('sign-up')
        else {
          // add to cart
          this.$store.dispatch('addMealToCart', payload);
        }
      },
      placeOrder(){
        this.revealModal('schedule-order', 'Schedule Delivery')
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
  }

</script>

<style scoped>

</style>
