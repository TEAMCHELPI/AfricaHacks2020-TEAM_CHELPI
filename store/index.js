/**----------State----------**/
export const state = () => ({
  leftSidebar: false,
});

/**----------Getters----------**/
export const getters = {
  leftSidebar(state) {
    return state.leftSidebar
  }
};
/**----------Mutations----------**/
export const mutations = {
  SET_LEFT_SIDEBAR(state, value) {
    state.leftSidebar = value
  },
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
};

