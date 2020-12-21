<template>
  <section class="w-full lg:px-32 px-16 py-10 relative">
    <img src="/images/sign-up-alert.png" id="signup-banner" alt="sign up alert image" />
    <section class="z-10 relative ">
      <header class="my-3">
        <h1 class="text-2xl font-head">Hi, Do Sign Up to Continue</h1>
      </header>
      <section class="text-center">
        <button @click="$auth.login()" class="block text-center rounded-full p-3 w-full hover:bg-brand-primary bg-green-600 font-head text-xl text-white">Sign Up</button>
        <p class="text-sm mt-3">Already have an Account? <button class="text-green-600" @click="$auth.login()">Login</button></p>
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    name: "SignUp",
  };
</script>

<style lang="scss">
  #signup-banner{
    width: 200px;
    height: auto;
    margin-right: -60px;
    position: absolute;
    z-index: 0;
    right: 0;
    top: -60px;
  }
</style>