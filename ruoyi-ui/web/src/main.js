import Vue from 'vue'


import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import App from './App'
import store from './store'
import router from './router'



import './assets/icons' // icon
// import './permission' // permission control

//调试工具
import VConsole from 'vconsole';
const vConsole = new VConsole();

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
