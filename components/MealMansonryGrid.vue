<template>
  <section v-if="entries" class="grid-container my-6">
    <div class="meal-grid-item" v-for="entry of entries"
    :key="entry.id">
      <meal-card :entry="entry" :pickButton="!admin"/>
    </div>
  </section>
</template>

<script>
	import MealCard from "~/components/MealCard.vue";

	export default {
		name: "MealMansonryGrid",
		components: { MealCard},
    props:{
      entries: {
        default: ()=>[],
        required: true,
        type: Array
      },
      admin:{
        required: false,
        default: false,
        type: Boolean
      }
    },
		data(){
			return {
				modal: {
					component: "",
					payload: "",
					title: "",
				},
      }
    },
		methods: {
		},

	}
</script>

<style lang="scss" scoped>
.meal-grid-item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  width: 100%;
  height: 100%;

  &:nth-child(odd) {
    grid-row-end: span 2;
  }

  &:nth-child(even) {
    grid-row-end: span 3;
  }
}

.grid-container {
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: dense;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(275px, 1fr));
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(275px, 1fr));
    grid-auto-rows: minmax(180px, auto);
  }
}

</style>
