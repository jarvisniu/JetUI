import Vue from 'vue'
import VueRouter from 'vue-router'

import Design from './design.vue'
import Gallery from './_gallery/gallery-page.vue'
import Button from './button/button-page.vue'
import Breadcrumb from './breadcrumb/breadcrumb-page.vue'
import Input from './input/input-page.vue'
import InputSearch from './input-search/input-search-page.vue'
import ToggleBar from './toggle-bar/toggle-bar-page.vue'
import Toolbar from './toolbar/toolbar-page.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/gallery', component: Gallery },
  { path: '/design', component: Design },
  { path: '/button', component: Button },
  { path: '/breadcrumb', component: Breadcrumb },
  { path: '/input', component: Input },
  { path: '/input-search', component: InputSearch },
  { path: '/toggle-bar', component: ToggleBar },
  { path: '/toolbar', component: Toolbar },
  { path: '*', redirect: '/gallery' },
]

const router = new VueRouter({
  routes,
})

export default router
