<template>

  <div>
    <div class="container mx-auto flex justify-between bg-transparent">
        <!-- Menu buttons -->
      <section class="flex items-center">
        <button v-if="sidebar" @click.stop="openSidebar" :class="['block  fixed rounded bg-green-600 bg-opacity-75 shadow-outline hover:bg-opacity-75 p-3', {'hamburger-close': leftSidebar}]">
          <span class="w-6 h-1 bg-white block shadow shadow-brand-primary rounded-full"></span>
          <span class="w-6 h-1 bg-white block my-1 shadow  shadow-brand-primary rounded-full"></span>
          <span class="w-6 h-1 bg-white block shadow shadow-brand-primary rounded-full"></span>
        </button>
        <the-logo :class="{'ml-16': $auth.loggedIn}"/>
      </section>

      <div class="flex space-x-3">
        <!-- User avatar -->
        <div v-if="$auth.loggedIn"
             class="user-avatar w-10 h-10 bg-white rounded-full relative"
             :style="{backgroundImage: `url(${avatar})`}">
          <span class="absolute w-3 h-3 rounded-full right-0 top-0 mt-2 -mr-1 bg-green-500"></span>
        </div>
        <!-- End user avatar-->

        <section v-else class="hidden lg:block md:block" v-show="buttons">
          <button @click.stop="$auth.loginWith('auth0')"
                  class="bg-green-400 block hover:bg-brand-primary transition-all duration-75 px-8 p-2 border-2 border-brand-primary rounded-full font-bold text-white tracking-wider">
            Sign Up
          </button>
        </section>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'NavigationBar',
    props: {
      buttons: {
        type: Boolean,
        default: true,
        required: false
      },
      sidebar: {
        typ: Boolean,
        default: false,
        required: false
      }
    },
    computed: {
      avatar() {
        return this.$auth.user ? this.$auth.user.picture : '/images/sample/chefs/chef002.jpg'
      },
      leftSidebar() {
        return this.$store.getters['leftSidebar']
      }
    },
    methods: {
      openSidebar() {
        this.$store.dispatch('openLeftSidebar')
      }
    }
  }

</script>

<style lang="scss">

  .hamburger-close {
    span {
      transition: all 0.25s ease-in;
      opacity: 0;

      &:first-child {
        transform: translateY(8px) rotate(45deg);
        opacity: 1;
      }

      &:last-child {
        opacity: 1;
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  }

</style>
