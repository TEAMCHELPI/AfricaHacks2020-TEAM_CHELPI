<template>
  <section class="logo">
    <n-link :to="{name: 'index'}">
      <img src="/images/logo/default.png" alt="" />
    </n-link>
  </section>
</template>

<style lang="scss">
.logo {
  animation: 1s appear;
  max-width: 150px;
  min-width: 120px;
  img {
    object-position: left center;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
