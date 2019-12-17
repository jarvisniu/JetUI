import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/home.vue'
import Button from './pages/button.vue'
import ImageButton from './pages/image-button.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/button', component: Button },
  { path: '/image-button', component: ImageButton },
  { path: '*', redirect: '/' },
]

const router = new VueRouter({
  routes,
})

export default router
