// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决部分手机机型上部分浏览器存在300ms的click延时问题
import fastClick from 'fastclick'
// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'

// 样式初始化，解决浏览器样式差异
import 'styles/reset.css'
// 解决移动端多倍屏将1px边框显示成多像素边框问题
import 'styles/border.css'
// 引入iconfont
import 'styles/iconfont.css'

import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
