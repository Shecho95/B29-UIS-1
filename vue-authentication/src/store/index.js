import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import auth from '@/modules/auth'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth']
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, bool){
      state.loading = bool;
    }
  },
  modules: {
    auth
  },
  plugins: [vuexLocal.plugin]
})
