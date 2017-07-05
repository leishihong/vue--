// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource  from 'vue-resource'
import swiper from 'vue-awesome-swiper'
import { Lazyload  } from 'mint-ui'
import VueLazyload from 'vue-lazyload'


import "./assets/css/iconfont.css"
import "./assets/css/reset.css"
import "./assets/css/common.css"

Vue.prototype.$http = vueResource

Vue.config.productionTip = false
Vue.use(swiper)
Vue.use(vueResource)
Vue.use(Lazyload)

Vue.use(VueLazyload,{
	preLoad: 1.3,
	error: 'dist/error.png',
	loading: 'dist/loading.gif',
	attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
