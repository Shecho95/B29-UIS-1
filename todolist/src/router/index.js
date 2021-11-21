import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/todos'
  },
  {
    path: '/todos',
    name: 'Todos',
    component: () => import(/* webpackChunkName: "Todos" */ '../views/Todos.vue')
  },
  {
    path: '/todos/create',
    name: 'TodosCreate',
    component: () => import(/* webpackChunkName: "TodosCreate" */ '../views/TodosCreate.vue')
  },
  {
    path: '/todos/:id/update',
    name: 'TodosUpdate',
    component: () => import(/* webpackChunkName: "TodosUpdate" */ '../views/TodosUpdate.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
