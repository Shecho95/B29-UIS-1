import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import router from '../router'
import store from '../store';

const baseURL = 'http://localhost:3000';
axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(
    config => {
        const token = JSON.parse(window.localStorage.getItem('vuex')).auth.token;
        if(token !== null){
            config.headers['token-b29'] = token;
        }
        return config
    },
    err => Promise.reject(err)
)

axios.interceptors.response.use(
    config => config,
    err => {
        if(err.response.status == 401 || err.response.statusCode == 401){
            store.commit('auth/logout');
            router.push('/login')
        }else{
            return Promise.reject(err)
        }
    }
)

Vue.use(VueAxios, axios);