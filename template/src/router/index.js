import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/test',
      component: Vue.component('test', require('../views/Test'))
    }
  ]
})
