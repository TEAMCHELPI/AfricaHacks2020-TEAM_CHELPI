/**----------State----------**/
export const state = () => ({
  leftSidebar: false,
  cart:{
    orders: [],
    total: 0
  }
});

/**----------Getters----------**/
export const getters = {
  leftSidebar(state) {
    return state.leftSidebar
  },
  getCart(state){
    return state.cart
  },
  isPicked: (state)=>(id)=>{
    return state.cart.orders.length ?  state.cart.orders.some(item=>item.id==id) : false
  }
};
/**----------Mutations----------**/
export const mutations = {
  SET_LEFT_SIDEBAR(state, value) {
    state.leftSidebar = value
  },
  ADD_MEAL_TO_CART(state, payload){
    state.cart.orders.push(payload);
    state.cart.total++;
  },
  REMOVE_MEAL_FROM_CART(state, payload){
    // get meal id
    let id = state.cart.orders.find(item=>item.id === payload.id);
    if(id != -1){
      // if found, remove
      state.cart.orders.splice(id,1);
      state.cart.total--
    }
  }
};

/**----------Actions----------**/
export const actions = {
  openLeftSidebar({ commit, getters }) {
    commit('SET_LEFT_SIDEBAR', true)
  },
  closeLeftSidebar({ commit, getters }) {
    if (getters.leftSidebar)
      commit('SET_LEFT_SIDEBAR', false)
  },
  addMealToCart({commit}, payload){
    commit('ADD_MEAL_TO_CART', payload)
  },
  removeMealFromCart({commit}, payload){
    commit('REMOVE_MEAL_FROM_CART', payload)
  }
};
