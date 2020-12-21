<template>
  <transition name="fade">
    <div
      class="fixed top-0 left-0 w-screen h-screen z-50"
      v-if="showModal"
    >
      <div
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
      >
        <div
          v-if="showModal"
          @click="closeModal"
          @focus="closeModal"
          class="opacity-75 fixed inset-0 z-40 bg-black"
        ></div>
        <button
          v-if="showClose"
          class="absolute top-0 px-1 self-center rounded-full ml-auto bg-transparent border-0 text-white opacity-5 right-0 leading-none font-semibold outline-none focus:outline-none z-50"
          v-on:click="toggleModal()"
        >
          <span
            class="bg-transparent text-white opacity-5 leading-none text-4xl block outline-none focus:outline-none m-4"
          >
            ×
          </span>
        </button>

        <div class="relative w-auto my-6 mx-3 max-w-3xl z-50">
          <!--content-->
          <div
            class=" shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            <!--header-->
           <!--  <header
              :class="[
                'flex items-start justify-between py-2 px-2 rounded-t']"
            >
              <h2
                class="text-xl font-head font-bold  flex-auto mx-10 text-center"
              >
                <slot name="title" />
              </h2>
            </header> -->
            <!--body-->
            <div class="relative flex-auto">
              <slot v-bind:action="actions" />
            </div>
            <!--footer-->
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TheModal",
  /* created() {
          this.$el.addEventListener("keyup", this.escapeKeyListener);
        },
        destroyed() {
          document.removeEventListener("keyup", this.escapeKeyListener);
        }, */
  props: {
    colorHeader: {
      default: true,
      required: false,
      type: Boolean,
    },
    showClose: {
      default: true,
      required: false,
      type: Boolean,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    actions() {
      return {
        open: this.openModal,
        close: this.closeModal,
        visible: this.showModal,
        toggle: this.toggleModal,
      };
    },
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
    escapeKeyListener(evt) {
      if (evt.keyCode === 27) {
        if (!this.showModal) {
          this.toggleModal();
        }
      }
    },
  },
};
</script>
