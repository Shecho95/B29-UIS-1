import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/secret',
    name: 'Secret',
    component: () => import(/* webpackChunkName: "Secret" */ '../views/Secret.vue'),
    meta: { requiredAuth: true }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const requiredAuth = to.matched.some(record => record.meta.requiredAuth);
  const isLogged = store.state.auth.isLogged;
  
  if(to.path === '/login' && isLogged){ return next('/secret') }
  
  if(requiredAuth && ! isLogged){
    next('/login');
  } else {
    next();
  }
});

export default router
