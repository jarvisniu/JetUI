import Vue from 'vue'
import VueRouter from 'vue-router'

import Design from './design.vue'
import Gallery from './_gallery/gallery.vue'

import Button from './button/button.vue'
import Input from './input/input.vue'
import InputSearch from './input-search/input-search.vue'

import ToggleBar from './toggle-bar/toggle-bar.vue'
import Toolbar from './toolbar/toolbar.vue'
import Panel from './panel/panel.vue'

import Breadcrumb from './breadcrumb/breadcrumb.vue'

Vue.use(VueRouter)

const routes = [
  // Intro
  { path: '/gallery', component: Gallery },
  { path: '/design', component: Design },
  // Basic
  { path: '/button', component: Button },
  { path: '/input', component: Input },
  { path: '/input-search', component: InputSearch },
  // Container
  { path: '/toggle-bar', component: ToggleBar },
  { path: '/toolbar', component: Toolbar },
  { path: '/panel', component: Panel },
  // Navigation
  { path: '/breadcrumb', component: Breadcrumb },
  // Other
  { path: '*', redirect: '/gallery' },
]

const router = new VueRouter({
  routes,
})

export default router
