<template>
  <div
    class="w-auto animate__fadeIn animate__animated flex justify-center items-center leading-tight m-auto"
  >
    <!--    <clip-loader v-bind="$attrs" :color="color " :size="size"></clip-loader>-->
    <div
      class="loading-spinner"
      v-bind="$attrs"
      :style="{ width: `${size}`, height: `${size}`, background: color }"
    ></div>
    <slot v-if="indicator">
      <span class="py-4 ml-4 my-auto indicator" :style="{ color }"
        >Loading...</span
      >
    </slot>
  </div>
</template>

<script>

export default {
  name: "TheLoader",
  props: {
    loading: {
      required: false,
      type: Boolean,
    },
    color: {
      required: false,
      default: "#072f55",
    },
    size: {
      required: false,
      default: "16px",
      type: String,
    },
    indicator: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  inheritAttrs: false,
 
};
</script>

<style lang="scss">
.loading-spinner {
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  display: block;
  animation: beep 1s linear infinite;
  position: relative;
  width: 20px;
  height: 20px;
  background-color: red;
}
.indicator {
  color: theme("colors.gray.500");
  font-size: 12px;
  letter-spacing: 0;
  animation: beepVisibility 1.25s linear infinite;
}

@keyframes beep {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.25);
    opacity: 1;
  }
  100% {
    transform: scale(1.75);
    opacity: 0.25;
  }
}
@keyframes beepVisibility {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>