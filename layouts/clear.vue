<template>
  <main class="relative">
  	<section class="p-4 absolute z-50 left-0 w-full top-0">
      <the-navigation-bar :sidebar="$auth.loggedIn" />
    </section>
    <!-- Sidebar -->
      <the-sidebar v-if="$auth.loggedIn"/>
    <Nuxt />
  </main>
</template>

<script>
	export default {
		name: "clear"
	}
</script>

<style scoped>

</style>
