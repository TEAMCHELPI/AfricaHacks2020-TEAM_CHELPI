<template>

  <section class="min-h-screen flex flex-col p-6 lg:px-12 bg-gray-900 banner" :style="{backgroundImage: `url(${banner})`}" >
    <section class="flex justify-between items-center px-3 flex-grow item-center h-full z-10">
			<section class="lg:flex-1"></section>
			<section class="lg:w-5/12 justify-between items-start bg-white bg-opacity-25 flex flex-col h-full  lg:p-12 p-8">
				<header class="font-head mb-6 ">
					<h2 class="mb-4 font-medium text-black text-2xl">Chelpi For Chefs</h2>
					<h1 class="font-medium text-4xl text-black">
						A world of food lovers now within your reach
					</h1>
				</header>
				<p class="text-left text-gray-400 text-xl mb-6 block font-light">
					Join thousands of chef, build a community of food lovers, share and sell recipes, sell meals, share skill and get inspired.
				</p>
				<button type="button" @click.stop="createRestaurant" name="button" class="text-white hover:bg-green-600 font-medium font-head text-xl bg-brand-primary p-6 px-12 inline-block">
					Create Virtual Restaurant
				</button>
			</section>
    </section>

  </section>

</template>

<script>
  export default {
    name: 'create-restaurant-landing-page',
		data(){
			return {
				banner: '/images/sample/chefs/chef002.jpg'
			}
		},
		layout: 'dashboard',
		methods:{
			createRestaurant(){
				this.$router.push('create-restaurant');
			}
		}
  }

</script>

<style scoped>

</style>
