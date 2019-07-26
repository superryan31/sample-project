export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
};
export const mutations = {
  // SET USER
  setUser (state, user) {
    state.user = user
  },
  // SET TOKEN
  setToken (state, token) {
    state.token = token
  }
}
