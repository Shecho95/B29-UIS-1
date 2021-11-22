import Vue from 'vue';

export async function login({ commit }, user){
    commit('setLoading', true, { root: true });
    return Vue.axios.post('/api/users/login', user).then(res => {
        commit('setUserData', res.data);
        return res
    }).catch(err => {
        commit('setError', err.msg);
    }).finally(() => {
        commit('setLoading', false, { root: true });
    })
}