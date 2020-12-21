<template>
  <div class="hero flex flex-col p-6 lg:px-12">
    <section class="hero-text my-auto flex container mx-auto relative z-10">
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
  background-image:  url("/images/landing/banner.jpg") ;
  background-size: cover ;
  background-position: 50% 0;
  background-repeat: no-repeat;
  &::before{
    background-color: rgba(255, 255,255,.75);
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
  }
}
</style>
