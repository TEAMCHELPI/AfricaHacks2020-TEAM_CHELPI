<template>
  <div>
    <div class="container mx-auto flex justify-between bg-transparent">
      <section class="flex items-center">
        <button @click.stop="openSidebar" :class="['block w-12 h-full', {'hamburger-close': leftSidebar}]">
          <span class="w-8 h-1 bg-white block mb-2  rounded-full"></span>
          <span class="w-8 h-1 bg-white block mb-2  rounded-full"></span>
          <span class="w-8 h-1 bg-white block mb-2  rounded-full"></span>
        </button>
        <the-logo/>
      </section>
      <div>
        <!-- Menu button -->
        <section class="hidden lg:block md:block" v-show="buttons">
          <n-link :to="{name: 'signup'}"
                  class="bg-green-400 block hover:bg-brand-primary transition-all duration-75 px-8 p-2 border-2 border-brand-primary rounded-full font-bold text-white tracking-wider"
          >
            Sign Up
          </n-link>
        </section>

        <div class=""></div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "NavigationBar",
		props: {
			buttons: {
				type: Boolean,
				default: true,
				required: false
			}
		},
		computed: {
			leftSidebar() {
				return this.$store.getters["leftSidebar"];
			},
		},
		methods: {
			openSidebar() {
				this.$store.dispatch( "openLeftSidebar" );
			}
		}
	};
</script>

<style lang="scss">
  .hamburger-close {
    span {
      transition: all .25s ease-in;
      opacity: 0;

      &:first-child {
        transform: translateY(12px) rotate(45deg);
        opacity: 1;
      }

      &:last-child {
        opacity: 1;
        transform: translateY(-12px) rotate(-45deg);

      }
    }
  }
</style>
