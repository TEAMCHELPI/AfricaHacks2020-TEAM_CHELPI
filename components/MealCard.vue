<template>
  <section class="flex flex-col w-full h-full">
    <div
      class="meal-card"
      :style="{ backgroundImage: `url('/images/sample/meals/meal001.jpg')` }"
    >
      <section class="metadata flex flex-col mb-0 flex-grow h-full">
        <section class="flex z-10 mb-auto justify-between flex-wrap p-4">
          <div class="meal-rating">
            <span class="w-4 h-4 block bg-gray-300 rounded-full"></span>
            <span class="rating ml-2 px-2 bg-orange-600 rounded-full">4.5</span>
          </div>
          <span class="w-4 h-4 block bg-gray-300 rounded-full"></span>
        </section>
        <section class="mt-auto flex flex-col justify-end">
          <section class="flex z-10 justify-between w-full h-full mt-auto p-4">
            <div class="flex space-x-2 items-center">
              <span class="w-8 h-8 block bg-gray-200 rounded-full"></span>
              <p class="font-head text-white font-medium capitalize">Name</p>
            </div>

            <button
              @click="pickMeal({ name: 'Fabriques' })"
              class="p-2 hover:shadow-outline hover:text-white hover:bg-brand-primary font-medium px-6 bg-white rounded font-head text-gray-700"
            >
              Pick
            </button>
            <!-- <button @click.stop="dropMeal(payload)"
              class="p-2 px-6 hover:shadow-outline bg-brand-primary hover:bg-green-100 font-medium hover:text-brand-primary text-white font-head rounded"
            >
              Unpick
            </button> -->
          </section>
        </section>
      </section>
      <!-- Overlay on hover -->
      <section
        class="availability absolute top-0 left-0 h-full w-full justify-center items-center flex transition-all duration-500 bg-black bg-opacity-75 ease-in-out hover:opacity-100 opacity-0 text-white font-medium font-head"
      >
        Open at {2:30pm}
      </section>
    </div>
    <div class="flex py-3 items-baseline justify-between">
      <span
        class="leading-normal text-sm font-head font-medium bg-opacity-25 rounded-full px-3 bg-gray-500"
        >Sandwich</span
      ><span
        class="leading-normal text-sm font-head font-medium bg-opacity-25 rounded-full px-3 bg-gray-500"
        >$0.1</span
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "MealCard",
  methods: {
    pickMeal(payload) {
      this.$eventBus.$emit("pickMeal", payload);
    },
    // Only authenticated users can see this
    dropMeal(payload) {
	    this.$eventBus.$emit("dropMeal", payload);
    },
  },
};
</script>

<style lang="scss" >
.meal-card {
  min-height: 275px;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  background: theme("colors.gray.800");
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.75s ease-in-out;
  &:hover {
    background-position-x: -10px;
  }
  &:before {
    content: "";
    position: absolute;
    background: hsla(0, 0%, 28%, 0.371);
    background: linear-gradient(
      to top,
      rgba(3, 4, 3, 0.563) 10%,
      rgba(227, 235, 227, 0.282)
    );
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .meal-rating {
    margin-block-start: 0;
    margin-block-end: 0;
    display: flex;
    align-items: center;
    text-align: left;
    font-size: 12px;
    letter-spacing: 0px;
    color: #ffffff;
  }
}
</style>
