<template>
  <div>
    <div class="container mx-auto flex justify-between bg-transparent">
      <section class="flex items-center">
        <button v-if="sidebar" @click.stop="openSidebar" :class="['block w-12 h-full', {'hamburger-close': leftSidebar}]">
          <span class="w-8 h-1 bg-white block mb-2  rounded-full"></span>
          <span class="w-8 h-1 bg-white block mb-2  rounded-full"></span>
          <span class="w-8 h-1 bg-white block mb-2  rounded-full"></span>
        </button>
        <the-logo/>
      </section>
      <div class="flex space-x-3">
        <!-- Menu buttons -->
        <section v-if="false" class="hidden lg:block md:block" v-show="buttons">
          <n-link :to="{name: 'signup'}"
                  class="bg-green-400 block hover:bg-brand-primary transition-all duration-75 px-8 p-2 border-2 border-brand-primary rounded-full font-bold text-white tracking-wider"
          >
            Sign Up
          </n-link>
        </section>

        <!-- User avatar -->
        <div v-else class="user-avatar w-10 h-10 bg-white shadow-outline rounded-full relative"
             :style="{backgroundImage: `url(${avatar})`}">
          <span class="absolute w-3 h-3 rounded-full right-0 top-0 mt-2 -mr-1 bg-green-500"></span>
        </div>
        <!-- End user avatar-->
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
			},
      sidebar: {
				typ: Boolean,
        default: false,
        required: false
      }
		},
		computed: {
			avatar(){
				return '/images/sample/chefs/chef002.jpg'
      },
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
