<template>
  <div>
    <!-- Hero section -->
    <section class="min-h-screen flex flex-col p-6 lg:px-12 bg-gray-900">
      <the-navigation-bar></the-navigation-bar>
      <section class="container mx-auto h-full m-auto">
        <header class="py-4 block">
          <h1 class="lg:text-5xl text-4xl font-head text-white">
            Hungry? Find Nearby Chefs And Meals
          </h1>
        </header>

        <section
          class="grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4 my-4"
        >
          <label
            class="form-input flex items-center py-1 rounded-none"
            for="search-box"
          >
            <span class="w-4 h-4 block mr-3 bg-gray-300"></span>
            <input
              id="search-box"
              type="text"
              class="form-input border-none m-0 focus:outline-none focus:shadow-none"
              placeholder="Enter Delivery Address"
            />
          </label>

          <label
            class="form-input flex py-1 items-center rounded-none"
            for="schedule-delivery"
          >
            <span class="w-4 h-4 mr-3 block bg-gray-300"></span>

            <input
              placeholder="Schedule Delivery"
              name="schedule-delivery"
              class="form-input border-none flex-auto m-0 focus:shadow-none"
            />
            <span class="w-4 h-4 block bg-gray-300"></span>
          </label>

          <label class="flex items-center flex-auto" for="search-button">
            <button class="p-3 text-white font-medium px-8 bg-brand-primary">
              Find Meals
            </button>
          </label>
        </section>
      </section>
    </section>

    <section class="container mx-auto">
      <header class="flex flex-wrap justify-between w-full py-2">
        <section class="flex flex-auto mr-auto p-4 items-center space-x-3">
          <span class="font-head lg:text-xl text-right">Meals Nearby</span>
          <span class="w-4 h-4 block bg-gray-300 rounded-full"></span>
        </section>
        <section class="flex text-right p-4 items-center space-x-3">
          <span class="w-8 h-8 block bg-gray-300 rounded-full"></span>
          <span class="font-head lg:text-xl"> Meals picked</span>
          <span
            class="leading-none px-4 pb-1 rounded-full text-xs bg-gray-500 bg-opacity-25"
            >4</span
          >
        </section>
      </header>

      <section class="grid-container mb-12">
        <section class="meal-grid-item" v-for="n in 30" :key="n">
          <div
            class="meal-card"
            :style="{ backgroundImage: `url('/images/landing/banner.jpg')` }"
          >
            <section class="metadata m-auto h-full flex flex-col w-full">
              <section class="flex z-10 justify-between flex-wrap p-4">
                <div class="meal-rating">
                  <span class="w-4 h-4 block bg-gray-300 rounded-full"></span>
                  <span class="rating ml-2 px-2 bg-orange-600 rounded-full"
                    >4.5</span
                  >
                </div>
                <span class="w-4 h-4 block bg-gray-300 rounded-full"></span>
              </section>
              <section class="flex z-10 justify-between w-full mt-auto p-4">
                <div class="flex space-x-2 items-center">
                  <span class="w-8 h-8 block bg-gray-200 rounded-full"></span>
                  <p class="font-head text-white font-medium">Name</p>
                </div>

                <button class="p-2 px-6 bg-white rounded">Pick</button>
              </section>
            </section>
            <section
              class="availability absolute top-0 left-0 h-full w-full justify-center items-center flex transition-all duration-500 bg-green-900 bg-opacity-75 ease-in-out hover:opacity-100 opacity-0 text-white font-medium"
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
      </section>
    </section>
  </div>
</template>

<script>
import TheNavigationBar from "~/components/TheNavigationBar.vue";
export default {
  components: { TheNavigationBar },
  name: "Explorer",
};
</script>
<style lang="scss" >
.meal-grid-item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  width: 100%;
  height: 100%;

  .meal-card {
    min-height: 275px;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 2;
    margin: auto;
    background: theme("colors.gray.800");
    position: relative;
    background-size: auto 100%;
    background-repeat: no-repeat;
    transition: all 0.75s ease-in-out;
    &:hover {
      background-size: auto 120%;
    }
    // &:before {
    //   content: "";
    //   position: absolute;
    //   background: rgba(119, 47, 47, 0.248);
    //   width: 100%;
    //   height: 100%;
    //   top: 0;
    //   left: 0;
    //   z-index: 0;
    // }
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

  &:nth-child(odd) {
    grid-row-end: span 2;
  }
  &:nth-child(even) {
    grid-row-end: span 3;
  }
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(275px, 1fr));
  grid-gap: 10px;
  grid-auto-rows: minmax(180px, auto);
  grid-auto-flow: dense;
}
</style>