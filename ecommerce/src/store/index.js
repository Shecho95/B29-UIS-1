import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import localForage from "localforage";

import products from './modules/products'
import cart from './modules/cart'

const vuexLocal = new VuexPersistence({
  storage: localForage,
  modules: ['cart']
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products, cart
  },
  plugins: [vuexLocal.plugin]
})
