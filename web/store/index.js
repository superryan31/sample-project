export const state = () =>({
  status: '',
  token: localStorage.getItem('token') || '',
  user: {}
})

export const mutations = {
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, token, user) {
    state.status = 'success'
    state.token = token
    state.user = user
  },
  auth_error(state) {
    state.status = 'error'
  },
  logout(state) {
    state.status = ''
    state.token = ''
  }
}

export const actions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      console.log('here')
      commit('auth_request')
      this.$axios({ url: 'users/sign_in', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.headers.authorization;
          const user = resp.data
          localStorage.setItem('token', token);
          commit('auth_success', token, user);
          resolve(resp);
        })
        .catch(err => {
          commit('auth_error');
          localStorage.removeItem('token');
          reject(err);
        })
    })
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout');
      localStorage.removeItem('token');
      resolve();
    })
  }
}

export const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
}
