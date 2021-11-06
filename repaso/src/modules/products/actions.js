import Vue from 'vue';

export async function fetchProducts({ commit }){
    await Vue.axios.get('/products').then(({ data }) => {
        commit('setProducts', data);
    }).catch(err => {
        const msg = err.message;
        commit('productsError', msg);
    })
}