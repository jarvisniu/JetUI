import Vue from 'vue'
import VueRouter from 'vue-router'

// Intro
import Gallery from './_gallery/gallery.vue'
import Design from './_design/design.vue'

// Basic
import Button from './button/button.vue'
import Icon from './icon/icon.vue'
import Input from './input/input.vue'
import InputNumber from './input-number/input-number.vue'
import InputSearch from './input-search/input-search.vue'
import Label from './label/label.vue'
import List from './list/list.vue'

// Container
import Toolbar from './toolbar/toolbar.vue'
import ToggleBar from './toggle-bar/toggle-bar.vue'
import Panel from './panel/panel.vue'
import RotatedView from './rotated-view/rotated-view.vue'
import SplitView from './split-view/split-view.vue'
import ContainView from './contain-view/contain-view.vue'

// Navigation
import Menu from './menu/menu.vue'
import Breadcrumb from './breadcrumb/breadcrumb.vue'

Vue.use(VueRouter)

const routes = [
  // Intro
  { path: '/gallery', component: Gallery },
  { path: '/design', component: Design },
  // Basic
  { path: '/button', component: Button },
  { path: '/icon', component: Icon },
  { path: '/input', component: Input },
  { path: '/input-number', component: InputNumber },
  { path: '/input-search', component: InputSearch },
  { path: '/label', component: Label },
  { path: '/list', component: List },
  // Container
  { path: '/toggle-bar', component: ToggleBar },
  { path: '/toolbar', component: Toolbar },
  { path: '/panel', component: Panel },
  { path: '/rotated-view', component: RotatedView },
  { path: '/split-view', component: SplitView },
  { path: '/contain-view', component: ContainView },
  // Navigation
  { path: '/menu', component: Menu },
  { path: '/breadcrumb', component: Breadcrumb },
  // Other
  { path: '*', redirect: '/gallery' },
]

const router = new VueRouter({
  routes,
})

export default router
