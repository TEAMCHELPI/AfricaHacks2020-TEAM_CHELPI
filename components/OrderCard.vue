<template>
  <section class="justify-around px-3 flex items-center hover:shadow-sm rounded relative">
      <div class="flex flex-wrap items-center lg:space-x-6 md:space-x-3 py-3">
        <div style="width: 197px; background: red">
          <img src="/images/sample/sample.webp" alt="">
        </div>
        <p class="font-head text-xl lg:p-6 md:p-3 py-3">
          Chinese Salad
        </p>
        <span class="p-6 font-head text-xl font-bold text-gray-800">{$5}</span>
      </div>
      <button @click.stop="removeFromCart" class="lg:relative md:relative absolute top-0 right-0 cursor-pointer mr-3 ml-auto text-4xl">&times;</button >
  </section>
</template>

<script>
export default {
  name: 'OrderCard',
  props: {
    order: {
      type: Object | Function,
      required: true
    }
  },
  data(){
    return {

    }
  },
  methods:{
    removeFromCart(){}
  }
}
</script>
