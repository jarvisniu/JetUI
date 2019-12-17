import './main.scss'

import Vue from 'vue'

import JetUI from '../src/index.js'
import App from './app.vue'
import router from './router.js'

Vue.use(JetUI)
Vue.component('App', App)

new Vue({
  el: '#app',
  router,
  render: h => h('app'),
})
