import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './home.vue'
import Button from './button/button-page.vue'
import ImageButton from './image-button/image-button-page.vue'
import Toolbar from './toolbar/toolbar-page.vue'
import ToggleBar from './toggle-bar/toggle-bar-page.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/button', component: Button },
  { path: '/image-button', component: ImageButton },
  { path: '/toolbar', component: Toolbar },
  { path: '/toggle-bar', component: ToggleBar },
  { path: '*', redirect: '/' },
]

const router = new VueRouter({
  routes,
})

export default router
