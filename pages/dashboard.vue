<template>
	<nuxt-child/>
</template>

<script> export default {
	name: 'DashboardRouter',
	middleware: ['auth', 'helper']
}

</script>