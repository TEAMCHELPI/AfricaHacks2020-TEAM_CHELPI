<template>
  <section class="flex flex-col min-h-screen">
    <section class="p-4 mb-auto">
      <the-navigation-bar :buttons="false"/>
    </section>
    <section class="px-4 container lg:w-5/12 flex flex-col items-center justify-center mx-auto mb-auto">
      <header class="mb-3">
        <h1 class="lg:text-5xl text-3xl font-head ">Your One Step Closer to Your Favourite Meals</h1>
      </header>
      <section class="w-full">
        <header class="my-3">
          <h2 class="text-xl font-head">
            Sign up with Email or Phone Number
          </h2>
        </header>
<!--         <label for="" class="">
          <input type="text" placeholder="Enter Email or Phone Number"
                 class="w-full form-input rounded-none py-3">
        </label> -->
        <button type="button" @click="$auth.loginWith('auth0')" class="bg-brand-primary text-white tracking-wider hover:bg-green-600 font-medium p-3 px-8 text-white font-head mt-3">
          Sign Up
        </button>
        <section class="mt-3 font-head font-medium">
          <p>Already have an Account? 
            <button @click="$auth.login()" class="text-brand-primary font-semibold">Login</button>
          </p>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
	export default {
		name: "signUp",
		layout: 'clear'
	}
</script>

<style scoped>

</style>
