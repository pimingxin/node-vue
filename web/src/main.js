import Vue from 'vue'
import App from './App.vue'

import './assets/font/iconfont.css'
import './assets/scss/style.scss'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import Card from './components/Card.vue'

Vue.component('M-card',Card)

import ListCard from './components/ListCard.vue'

Vue.component('M-L-card',ListCard)

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false
Vue.config.lintOnSave = false

import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

window.masterColor = "red"