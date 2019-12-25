import Vue from 'vue'
import VueRouter from 'vue-router'

import Design from './design.vue'
import Gallery from './_gallery/gallery.vue'
import Button from './button/button.vue'
import Breadcrumb from './breadcrumb/breadcrumb.vue'
import Input from './input/input.vue'
import InputSearch from './input-search/input-search.vue'
import ToggleBar from './toggle-bar/toggle-bar.vue'
import Toolbar from './toolbar/toolbar.vue'

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
