<template>
  <div class="min-h-screen">
    <the-hero>
      <template v-slot:hero-title>
        <h1 class="hero-title text-4xl">
          Meals you love, delivered at your doorstep
        </h1>
      </template>
      <template v-slot:hero-subtitle>
        <p class="hero-subtitle">
          Be among the first to order delicious meals from your favorite chefs.
        </p>
      </template>
      <template v-slot:hero-button>
        <button @click.stop="$router.push({name: 'explorer'})" class="hero-button shake-animate">Explore</button>
      </template>
    </the-hero>

    <!-- How it works -->
    <section>
      <div class="container mx-auto py-24">
        <header class="lg:my-16 my-12">
          <h2 class="lg:text-5xl text-4xl font-head text-center capitalize">
            How it works
          </h2>
        </header>
        <ul class="flex justify-between items-center flex-wrap relative hiw">
          <li
            class="flex flex-col lg:w-1/3 md:w-1/3 m-auto items-center p-6 text-center hiw-stage"
          >
            <div class="hiw-card">
              <i
                class="flaticon-039-online-shop-9 fi flex-auto my-auto text-5xl"
              ></i>
              <span
                class="absolute bottom-0 mb-3 text-white text-xs px-4 py-1 rounded-full -mr-6 right-0 capitalize step-indicator"
              >
                step 1
              </span>
            </div>
            <p class="font-light tracking-wide pt-12 block">
              Pick and order your favorite meals from top chefs.
            </p>
          </li>
          <li
            class="flex flex-col hiw-stage md:w-1/3 lg:w-1/3 flex-auto items-center p-6 text-center"
          >
            <div class="hiw-card">
              <i
                class="fi flaticon-073-placeholder flex-auto my-auto text-5xl"
              ></i>
              <span
                class="absolute bottom-0 mb-3 text-white text-xs px-4 py-1 rounded-full -mr-6 right-0 capitalize step-indicator"
                >step 2
              </span>
            </div>
            <p class="font-light tracking-wide pt-12 block">
              Track and manage orders on the go
            </p>
          </li>
          <li
            class="flex hiw-stage flex-col md:w-1/3 lg:w-1/3 m-auto items-center p-6 text-center"
          >
            <div class="hiw-card">
              <i
                class="flaticon-067-delivery-truck-1 fi flex-auto m-auto text-5xl opacity-50"
              ></i>
              <span
                class="absolute bottom-0 mb-3 text-white text-xs px-4 py-1 rounded-full -mr-6 right-0 capitalize step-indicator"
                >step 2
              </span>
            </div>
            <p class="font-light tracking-wide pt-12 block">
              Your order gets delivered to your doorsteps
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Become a chef-->
    <section class="bg-gray-200">
      <div
        class="flex flex-wrap justify-between mx-auto lg:py-24 py-12 relative"
      >
        <section class="flex-auto relative">
          <img
            src="/images/landing/buyer.png"
            class="object-contain w-full h-full"
            alt=""
          />
        </section>
        <section class="lg:w-2/3 flex items-center flex-col p-6">
          <div class="mx-auto my-12 lg:w-9/12 md:w-10/12">
            <header class="my-8">
              <span
                class="uppercase text-green-600 font-ight leading-none tracking-wider"
                >OWN A VIRTUAL RESTUARANT
              </span>
              <h2 class="lg:text-5xl text-4xl font-head capitalize relative">
                Become a chef
                <span
                  class="absolute w-56 left-0 bottom-0 rounded-full -mb-3 h-1 bg-brand-primary"
                ></span>
              </h2>
            </header>
            <p class="mb-12 mt-6 font-light leading-relaxed">
              Eliminate the cost of owning a restaurant, expand your business by
              creating a virtual restaurant at no cost. Sell meals better,
              faster and easier. Sign up to get notified as soon as we launch
            </p>
            <n-link
              :to="{ name: 'explorer' }"
              class="bg-green-500 hover:bg-brand-primary text-white p-3 px-12 lg:w-auto w-full md:w-auto rounded-full"
            >
              Explore
            </n-link>
          </div>
        </section>
      </div>
    </section>
    <!-- Become an agent-->
    <section>
      <div
        class="flex flex-wrap justify-between mx-auto lg:py-24 py-12 relative"
      >
        <section class="lg:w-2/3 flex items-center flex-col p-6">
          <div class="mx-auto my-12 lg:w-9/12 md:w-10/12">
            <header class="my-8">
              <span
                class="uppercase text-green-600 leading-none tracking-wider"
              >
                MAKE SOME EXTRA CASH
              </span>
              <h2 class="lg:text-5xl text-4xl font-head capitalize relative">
                Become A Delivery Agent
                <span
                  class="absolute w-56 left-0 bottom-0 rounded-full -mb-3 h-1 bg-brand-primary"
                ></span>
              </h2>
            </header>
            <p class="mb-12 mt-6 font-light leading-relaxed">
              Looking to earn some extra income? Become one of our delivery
              agent and work at your own schedule
            </p>
            <n-link
              :to="{ name: 'explorer' }"
              class="bg-green-500 hover:bg-brand-primary text-white p-3 px-12 lg:w-auto w-full md:w-auto rounded-full"
            >
              Explore
            </n-link>
          </div>
        </section>
        <section class="flex-auto relative">
          <img
            src="/images/landing/agent.png"
            class="object-contain w-full h-full"
            alt=""
          />
        </section>
      </div>
    </section>
  </div>
</template>
    </the-hero>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero-title {
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: capitalize;
  @apply font-head;
  @apply leading-tight;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
}
.hero-subtitle {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
}

.hero-button {
  background-color: theme("colors.green.400");
  padding: 15px 30px 15px 30px;
  @apply text-white;
  @apply uppercase;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
  border-width: 2px;
  border-color: theme("colors.green.400");
  @apply rounded-full;
  @apply tracking-wider;
  transition: all 0.75s ease-in;
  @apply font-medium;
  &:hover {
    background-color: theme("colors.brand.primary");
  }
}
.hiw {
  .hiw-stage {
    position: relative;

    &:not(:last-of-type):after {
      content: "";
      position: relative;
      border-left-width: 6px;
      border-left-color: theme("colors.green.400");
      border-left-style: dotted;
      height: 100px;
      margin: auto 4px;
      top: 0;
      bottom: 0;
      display: block;

      @media screen and (min-width: 500px) {
        height: 0;
        /*width: 45%;*/
        border-bottom-width: 6px;
        border-bottom-color: theme("colors.green.400");
        border-bottom-style: dotted;
        position: absolute;
        right: 0;
        margin-top: 25%;
        margin-right: -25%;
      }
    }
  }
  .hiw-card {
    position: relative;
    width: 115px;
    height: 115px;
    box-shadow: 0px 5px 13px #00000024;
    @apply flex;
    @apply items-center;
    @apply rounded-full;
    @apply justify-center;
    @apply text-green-400;
    transition: all 0.25s ease-in;
    .step-indicator {
      background: theme("colors.green.400");
    }
    &:hover {
      @apply text-gray-800;
      box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.15);
      .step-indicator {
        background: theme("colors.gray.800");
      }
    }
  }
}

.become-chef-img {
  background-image: url("/images/landing/buyer.png");
  width: 828px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
