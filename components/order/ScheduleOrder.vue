<template>

  <section class="w-full" style="min-width: 300px">
    <form @submit.prevent="completeOrder" class="flex flex-col w-full">
      <label for="schedule-now"
             :class="['p-4 flex flex-grow w-full cursor-pointer hover:bg-gray-200 border-l-4 border-transparent', {'bg-gray-400 bg-opacity-25 border-brand-primary':scheduleType=='now'}]">
           <input required type="radio" value="now" v-model="scheduleType" class="w-0 opacity-0 form-radio text-lg mr-3" name="schedule-delivery" id="schedule-now">
           <span :class="['block font-head', {'text-brand-primary font-semibold':scheduleType=='now'}]">Deliver Now</span>
         </label>
      <hr>
      <label for="schedule-later"
             :class="['p-4 flex cursor-pointer hover:bg-gray-200 flex-grow w-full border-l-4 border-transparent', {'bg-gray-400 bg-opacity-25 border-brand-primary':scheduleType=='later'}]">
            <input required type="radio" value="later" v-model="scheduleType" :class="['w-0 opacity-0 form-radio text-lg mr-3']" name="schedule-delivery" id="schedule-later">
            <span :class="['block font-head', {'text-brand-primary font-semibold':scheduleType=='later'}]">Schedule delivery</span>
          </label>
      <section class="p-4 flex flex-wrap lg:space-x-3 md:space-x-3" v-if="scheduleType=='later'">
        <label for="schedule-later-day">
      <span class="text-xs block mb-1 text-gray-500">Choose day</span>
      <select required class="form-select uppercase font-head font-medium text-sm" name="">
        <option value="" disabled>Choose day</option>
        <option :value="day | capitalize" :key="day" v-for="day of days" >{{day | capitalize}}</option>
      </select>
    </label>
        <label for="schedule-later-time">
      <span class="text-xs block mb-1 text-gray-500">Time</span>
      <input required type="time" id="schedule-later-time" class="form-input  font-head font-medium text-sm" name="" value="">
    </label>
      </section>
      <button type="submit"
              class="w-full p-3 px-6 bg-brand-primary hover:bg-green-600 text-white font-head font-medium"
              name="schedule-button">Complete Order</button>
    </form>

  </section>

</template>

<script>

  export default {
    name: 'ScheduleOrder',
    data() {
      return {
        scheduleType: ''
      }
    },
    computed: {
      days() {
        return ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
      }
    },
    methods: {
      completeOrder() {
        // TODO: Complete order via payment
        // then
        this.$eventBus.$emit('completeOrder')
        this.$eventBus.$emit('hideModal')
      }
    }
  }

</script>
