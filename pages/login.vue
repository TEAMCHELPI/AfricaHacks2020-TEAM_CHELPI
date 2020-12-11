<template>

  <section class="flex flex-col min-h-screen">
    <section class="p-4 mb-auto">
      <the-navigation-bar :buttons="false"/>
    </section>
    <form action="" class="px-4 container lg:w-5/12 flex flex-col items-center justify-center mx-auto mb-auto">
      <header class="mb-3">
        <h1 class="lg:text-5xl text-3xl font-head text-center">Your One Step Closer to Your Favourite Meals</h1>
      </header>
      <section class="w-full">
        <header class="my-3">
          <h2 class="text-xl font-head">
            Sign up with Email or Phone Number
          </h2>
        </header>
        <form class="" @submit.prevent="userLogin" >

          <button :disabled="loading" type="submit" class="bg-brand-primary text-white text-xl font-medium form-input w-full py-3 mt-3">
                      Sign Up
                    </button>
        </form>
        <section class="mt-3">
          <p>Already have an Account? <span class="text-brand-primary">Login</span></p>
        </section>
      </section>
    </form>
  </section>

</template>

<script>

  export default {
    name: 'signin',
    layout: 'clear',
    data() {
      return {
        formData: {
          email: ''
        },
        loading: false
      }
    },
    methods: {
      async userLogin() {
        try {
          this.loading = true;
          let response = await this.$auth.login()
          response.then().finally(()=>{
            this.loading = false
          })
          console.log(response)
        } catch (err) {
          console.log(err)
        }
      }
    }
  }

</script>

<style scoped>

</style>
