<template>
	<section class="relative">
		<nuxt-child/>
<!--    Modal-->
		<the-modal ref="modal">
      <template>
        <component
        :is="modal.component"
        :component="modal.component"
        :payload="modal.payload"
        ></component>
	    </template>
	  </the-modal>
	</section>
</template>

<script> 
import SignUp from '~/components/SignUp.vue'
import TheModal from '~/components/TheModal'
import CreateRestaurant from '~/components/restaurant/CreateRestaurant'
import SetupMeal from '~/components/restaurant/setupMeal';
import ScheduleOrder from '~/components/order/ScheduleOrder';

export default {
	name: 'DashboardRouter',
	layout: 'clear',
	components: { SignUp, TheModal, CreateRestaurant, SetupMeal, ScheduleOrder },	
	mounted() {
		this.setupUserData();
		this.$eventBus.$on('pickMeal', this.pickMeal)
		this.$eventBus.$on('dropMeal', this.dropMeal)
		this.$eventBus.$on('placeOrder', this.placeOrder)
		this.$eventBus.$on('hideModal', this.hideModal);
		this.$eventBus.$on('createRestaurant', this.createRestaurant)
    // this.$eventBus.$on('finishCreatingRestaurant', this.finishCreatingRestaurant);
    this.$eventBus.$on('beginMealSetup', this.beginMealSetup);
    // this.$eventBus.$on('finishMealSetup', this.finishMealSetup);
  },
  destroyed() {
  	this.$eventBus.$off()
  },
  provide(){
  	return {
  		userID(){
  			return (this.$auth.loggedIn)?
    		// get user ID
    		this.$auth.user.sub.split('|')[1] : null;
    	},
    	user(){
    		if(this.$auth.loggedIn) return this.$auth.user
    			return null
    	}
    }
  },
  computed: {

  },
  data() {
  	return {
  		showCreationWizard: false,
  		modal: {
  			component: '',
  			payload: '',
  			title: ''
  		}
  	}
  },
  methods: {
  	beginMealSetup(){
      this.revealModal('setup-meal')  ;
    },
    finishMealSetup(){},
    setupUserData(){
    	if(this.$auth.loggedIn){
    		// get user ID
    		let userID = this.$auth.user.sub.split('|')[1];
    		if(!this.$store.getters['user']){
            // try getting the user from the firebase db

            // if the user does not exist

            // create the user information
          }
        }
      },
      createRestaurant(){
      	this.showCreationWizard = true;
      },
      finishCreatingRestaurant(){
      	this.showCreationWizard = true;        
      },
      pickMeal(payload) {
      	if (!this.$auth.loggedIn) this.revealModal('sign-up')
      		else {
          // add to cart
          this.$store.dispatch('addMealToCart', payload);
        }
      },
      placeOrder(){
      	this.revealModal('schedule-order', 'Schedule Delivery')
      },
      dropMeal(payload) {
        // if not authenticated
        if (!this.$auth.loggedIn) this.revealModal('sign-up', 'Sign up')
        	else {
          // remove from cart
          this.$store.dispatch('removeMealFromCart', payload);
        }
      },
      hideModal(){
      	this.$refs.modal.closeModal();
      },
      revealModal(component, title = 'Untitled', payload = null) {
      	try {
      		this.modal.component = component
      		this.modal.title = title
      		this.modal.payload = payload
      		this.$refs.modal.toggleModal()
      	} catch (e) {
      		console.error(e.message)
      	}
      }
    },
    middleware: ['auth', 'helper']
  }

  </script>