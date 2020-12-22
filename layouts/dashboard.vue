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
        <the-footer ></the-footer>
      </section>
    </section>
  </main>
</template>

<script>


export default {
  name: 'DashboardLayout',
  }
  </script>

  <style scoped>

  </style>
