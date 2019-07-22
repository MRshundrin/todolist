import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tasks',
      name: 'tasks',
      component: Home
    },
    {
      path: '/',
      name: 'authorization',
      component: () => import('./views/Authorization.vue')
    }
  ]
})
