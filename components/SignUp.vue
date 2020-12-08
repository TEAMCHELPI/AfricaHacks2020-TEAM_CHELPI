<template>
  <section class="w-full lg:px-32 px-16 py-10 relative">
    <img src="/images/sign-up-alert.png" class="absolute top-0 right-0 -mt-20 -mr-20 z-0 h-full" alt="sign up alert image" />
    <section class="z-10 relative">
      <header class="my-3">
        <h1 class="text-2xl font-head">Hi, Do Sign Up to Continue</h1>
      </header>
      <section>
        <n-link :to="{name: 'signup'}" class="block text-center rounded-full p-3 w-full hover:bg-brand-primary bg-green-600 font-head text-xl text-white">Sign Up</n-link>
        <p class="text-sm mt-3">Already have an Account? <span class="text-green-600">Login</span></p>
      </section>
    </section>
  </section>
</template>

<script>
	export default {
		name: "SignUp",
	};
</script>
