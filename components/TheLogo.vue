<template>
  <section class="logo">
    <img src="/images/logo/default.png" alt="" />
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
