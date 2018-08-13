import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history', // not show #(hash) on url
  scrollBehavior(to, from, savedPosition) {
    // scrollBehavior can scroll to id div (/user/3#data)
    // savedPosition is we back on previous page or next button to current page to # anchor div
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 } // coordinator of page when scroll <div id=data> /#data
  }
})

router.beforeEach((to, from, next) => {
  console.log('global beforeEach')
  next()
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
