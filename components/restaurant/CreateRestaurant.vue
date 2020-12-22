<template>
	<div class="bg-white min-h-screen px-4 flex flex-col items-center justify-center">
		<section v-if="loading" class="m-auto flex flex-col items-center font-head text-center lg:w-6/12" >
			<the-loader 	/>
		</section>
		<!-- Step 1 -->
		<template v-else>
			<section class="m-auto flex flex-col items-center font-head text-center lg:w-6/12" v-show="currentIndex==0">
				<header class="text-2xl flex items-center space-x-1 justify-center  text-brand-primary">
					<h1 class="font-semibold">Take your first step</h1>
					<span class="w-6 h-6 block bg-gray-300 rounded-full">
						<img src="/images/emoji/happy.svg" alt="">
					</span>
				</header>
				<p class="p-3 capitalize leading-relaxed">Hey! Lets get started by creating your virtual kitchen</p>
				<button @click.stop="next" class="block font-head mt-3 text-lg p-3 px-6 bg-brand-primary text-white font-semibold hover:bg-green-600">
					Let's Continue
				</button>
			</section>

			<!-- Step 2 -->
			<section class="m-auto flex flex-col font-head lg:w-6/12" v-show="currentIndex==1">
				<header class="text-3xl  text-brand-primary mb-6">
					<h1 class="font-semibold">What's the name of your restuarants?</h1>
				</header>
				<section class="w-full">
					<label for="w-full block">
					</label>
					<input type="text" class="form-input underlined block w-full" name="" id="" 
					placeholder="Virtual restaurant name">

					<button @click.stop="next" class="block font-head mt-6 text-lg p-3 px-8 bg-brand-primary text-white font-semibold hover:bg-green-600">Next</button>
				</section>
			</section>

			<!-- Step 3 -->
			<section class="m-auto flex flex-col font-head lg:w-6/12" v-show="currentIndex==2">
				<header class="text-3xl  text-brand-primary mb-6">
					<h1 class="font-semibold">What's your catch phrase?</h1>
				</header>
				<section class="w-full">
					<label for="w-full block">
					</label>
					<input type="text" class="form-input underlined block w-full" name="" id="" 
					placeholder="Meals at it best, get quality cooked, baked and grilled meals.">

					<button @click.stop="next" class="block font-head mt-6 text-lg p-3 px-8 bg-brand-primary text-white font-semibold hover:bg-green-600">Next</button>
				</section>		
			</section>

			<!-- Step 4 -->
			<section class="m-auto flex flex-col font-head lg:w-6/12" v-show="currentIndex==3">
				<header class="text-3xl  text-brand-primary ">
					<h1 class="font-semibold">Upload Banner to your Kitchen</h1>
					<p class="text-gray-600 text-sm">You can always do this later</p>
				</header>
				<section class="flex flex-wrap lg:space-x-3 items-center">
					<input type="file" label="Select Image" class="inline-block font-head mt-3 bg-gray-200 text-gray-700 font-semibold leading-none form-input hover:bg-gray-400">
					<button @click.stop="finish" class="block font-head p-3 px-8 bg-brand-primary text-white font-semibold hover:bg-green-600">Skip</button>
				</section>
			</section>

			<!-- Step 5 -->
			<section class="m-auto flex flex-col items-center font-head text-center lg:w-6/12" v-show="currentIndex==4">
				<header class="text-2xl flex items-center space-x-1 justify-center  text-brand-primary">
					<h1>Happy Selling!!</h1>
					<span class="w-6 h-6 block bg-gray-300 rounded-full">
						<img src="/images/emoji/happy.svg" alt="">
					</span>
				</header>
				<p class="p-3 capitalize leading-relaxed">Your all set to reach the world</p>		
				<n-link :to="{name: 'dashboard'}"  class="block font-head mt-3 text-lg p-3 px-8 bg-brand-primary text-white font-semibold hover:bg-green-600">
					Go to Dashboard
				</n-link>
			</section>
		</template>
	</div>
</template>

<script >
export default {
	name: 'CreateRestaurant',
	data(){
		return {
			currentIndex: 0,
			lastIndex: 4,
			loading: false,
			timeout: 0,
		}
	},
	methods:{
		next($event,timeout){
			if(!this.loading && this.currentIndex < this.lastIndex){
				this.loading = true;
				this.timeout = timeout ? timeout : 0;
				this.timeoutLoader();
			}
		},
		timeoutLoader(){
			setTimeout(()=>{
				this.loading = false;
				this.currentIndex++;				
			}, this.timeout);
		},
		finish(){
				// Do some validation here
				this.next(null, 4000);
		},
		createRestaurant(){
		// Save to firebase db
		},
	}	
}

</script>