/**----------State----------**/
export const state = () => ( {
  authenticated: false,
  user: null
});

/**----------Getters----------**/
export const getters = {
  authenticated(state) {
    return state.authenticated;
  },
  user(state){
  	return state.user
  }
};

/**----------Getters----------**/
export const mutations = {}

/**----------Actions----------**/
export const actions = {}
