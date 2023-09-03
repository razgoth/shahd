import { createStore } from 'vuex'

export default createStore({
  state: {
    giverId: '',
    receiverId: '',
    role: '',
    isloggedIn: false
  },
  getters: {
  },
  mutations: {
    login() {
      this.state.isloggedIn = true
    }
  },
  actions: {
  },
  modules: {
  }
})
