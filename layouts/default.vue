<template>

  <main>
    <the-sidebar/>
    <Nuxt />
    <!--  The Footer-->
    <the-footer />

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
  import ScheduleOrder from '~/components/order/ScheduleOrder'

  export default {
    name: 'DefaultLayout',
    components: { SignUp, TheModal, ScheduleOrder },
    mounted() {
      this.$eventBus.$on('pickMeal', this.pickMeal)
      this.$eventBus.$on('dropMeal', this.dropMeal)
      this.$eventBus.$on('placeOrder', this.placeOrder)
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
    async asyncData({ $axios }) {
      const ip = await $axios.$get('http://icanhazip.com')
      return { ip }
    },
    methods: {
      pickMeal() {
        // if not authenticated
        if (!this.$auth.loggedIn) this.revealModal('sign-up', 'Sign up')
        else {

        }
      },
      placeOrder(){
        this.revealModal('schedule-order', 'Schedule Delivery')
      },
      dropMeal() {
        // if not authenticated
        if (!this.$auth.loggedIn) this.revealModal('sign-up', 'Sign up')
        else {
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
    }
  }

</script>
