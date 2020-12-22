<template>
  <main class="relative">
  	<section class="p-4 absolute z-20 left-0 w-full top-0">
      <the-navigation-bar :sidebar="$auth.loggedIn" />
    </section>
    <!-- Sidebar -->
    <the-sidebar v-if="$auth.loggedIn"/>
    <nuxt />
  </main>
</template>

<script>
	export default {
		name: "clear"
	}
</script>

<style scoped>

</style>
