<template>

  <div class="">

  </div>

</template>

<script>

  export default {
    name: 'index',
    layout: 'dashboard',
    data() {
      return {
        banner: '/images/sample/meals/meal005.jpg'
      }
    },
    computed: {
      user() {
        return this.$auth.user
      }
    },
    methods: {
      openLeftSidebar() {
        this.$store.dispatch('openLeftSidebar')
      }
    }
  }

</script>

<style scoped>

  .dashboard-hero {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }

</style>
