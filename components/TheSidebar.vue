<template>
  <aside class="w-full h-screen z-50 fixed top-0 transition-all duration-500"
  :style="{ maxWidth: '300px', left: isOpen ? '0' : '-100%' }"
  ref="">

  <!-- Overlay -->
  <div class="opacity-75 fixed inset-0 z-40 bg-black" @click.stop="closeLeftSidebar"
  :class="['opacity-50 fixed inset-0 bg-black', { hidden: !isOpen }]"></div>
  <!-- End overlay -->

  <section class="flex flex-col justify-end bg-white z-50 relative" id="sidebar">

    <!-- Close button -->
    <button class="z-40 absolute top-0 right-0 -mr-10" @click.stop="closeLeftSidebar">
      <span class="text-4xl text-white">&times;</span>
    </button>
    <!-- End close button -->

    <!-- Top section -->
    <section class="p-4 justify-self-start mb-auto">

      <!-- User avatar -->
      <div class="user-avatar w-10 h-10 bg-white rounded-full relative"
      :style="{backgroundImage: `url(${avatar})`}">
      <span class="absolute w-3 h-3 rounded-full right-0 top-0 mt-2 -mr-1 bg-green-500"></span>
    </div>
    <!-- End user avatar -->
    <section class="mt-3 font-head">
      <h2 class="text-xl font-medium">{{$auth.user.name}}</h2>
      <p class="text-gray-700 text-sm">{{$auth.user.email}}</p>
    </section>
  </section>
  <!-- End top section -->

  <!-- Bottom section -->
  <section class="p-4">
    <!-- Navigation links -->
    <ul class="text-base leading-normal  font-head">
      <li class="mb-2">
        <n-link class="nav-link" :to="{name: 'dashboard-orders'}">My Orders</n-link>
      </li>
      <li class="mb-2">
        <n-link class="nav-link" :to="{name: 'dashboard-landing'}">My Kitchen</n-link>
      </li> 
      <li class="mb-2">
        <n-link class="nav-link" :to="{name: 'explorer'}">Explore</n-link>
      </li>
    </ul>
    <!-- End navigation links -->

    <!-- Logout button -->
    <button @click.stop="authAction" :class="['my-4 uppercase p-4 w-full  text-white font-medium', $auth.loggedIn ? 'bg-red-700 hover:bg-red-600': 'bg-brand-primary hover:bg-green-600']">
      {{$auth.loggedIn ? 'Log out' : 'Log in'}}
    </button>
    <!-- End logout button -->
  </section>
  <!-- End bottom section -->
</section>
</aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TheSidebar",
  data() {
   return {}
 },
 computed: {
  user() {
    return  (this.$auth.loggedIn)
    ? this.$auth.user
    :null
  },
  avatar(){
    return (this.$auth.loggedIn) ? this.$auth.user.picture : '/images/sample/chefs/chef002.jpg'
  },
  isOpen() {
    return this.$store.getters["leftSidebar"];
  }
},
methods: {
 closeLeftSidebar() {
  this.$store.dispatch( "closeLeftSidebar" );
},
authAction(){
  if(this.$auth.loggedIn){
    this.$auth.logout()
  }else{
    this.$auth.loginWith('auth0')
  }
}
}
}
</script>

<style scoped lang="scss">

#sidebar {
  width: 300px;
  height: 100vh;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
}
.nav-link{
  @apply tracking-wide;
  @apply font-medium;
  &.nuxt-link-exact-active{
    @apply font-semibold;
    @apply text-brand-primary
  }
  &:hover{
    @apply font-bold;
    @apply text-green-600;
  }
}

</style>
