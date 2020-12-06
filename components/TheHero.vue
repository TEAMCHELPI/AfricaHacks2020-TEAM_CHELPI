<template>
  <div class="hero flex flex-col p-6 lg:px-12">
    <the-navigation-bar />

    <section class="hero-text my-auto flex container mx-auto">
      <div class="flex justify-evenly">
        <section class="lg:w-1/2">
          <slot name="hero-title"></slot>
          <slot name="hero-subtitle"></slot>
          <slot name="hero-button"></slot>
        </section>
        <section class="lg:w-1/2"></section>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "TheHero",
};
</script>
<style scoped>
.hero {
  min-height: 100vh;
  background: white;
  background-image: url("/images/landing/banner.jpg");
  background-size: cover 100%;
  background-position: 50% 0;
  background-repeat: no-repeat;
}
</style>