import './main.scss'

import Vue from 'vue'

import JetUI from '../src/index.js'
import JtLayout from './pages/layout.vue'
import router from './pages/router.js'

Vue.use(JetUI)
Vue.component('JtLayout', JtLayout)

new Vue({
  el: '#app',
  router,
  render: h => h('jt-layout'),
})
