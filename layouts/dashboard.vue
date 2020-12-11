<template>

  <main>
    <the-sidebar/>
    <section class="relative z-10">
      <section class="p-4 absolute z-20 left-0 w-full top-0">
        <the-navigation-bar :sidebar="$auth.loggedIn" />
      </section>
      <nuxt/>
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
  export default {
    name: 'DashboardLayout',
    components: { TheSidebar, SignUp, TheModal },
    mounted() {
      this.$eventBus.$on('pickMeal', this.pickMeal)
    },
    destroyed() {
      this.$eventBus.$off()
    },
    computed: {
      user() {
        return this.$auth.user
      }
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
      pickMeal() {
        this.revealModal('sign-up', 'Sign up')
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
    middleware: ['auth']
  }

</script>

<style scoped>

</style>
