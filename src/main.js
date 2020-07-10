import Vue from 'vue'

import App from './App.vue'
import router from './router'
// 公共状态控制中心
import store from './store'
// svg图标的引入
import '@/components/svgIcon'
// vuex
import Vuex from 'vuex'
// iView 的组件库
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
// element的组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//jquery
import $ from 'jquery'
// bootstrap3
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
// 加载自定义字体
import '@/assets/css/stylesheet.css'
// remixicon.com图标库
import 'remixicon/fonts/remixicon.css'

Vue.use(Vuex)
Vue.use(ViewUI)
Vue.use(ElementUI)

Vue.$ = Vue.prototype.$ = $

// 阻止启动生产消息，常用作指令
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// runtime模式
// new Vue({ router,store,  render: h => h(App)}).$mount("#app")
// compiler模式,配置vue.config.js中的（别名）'vue$': 'vue/dist/vue.esm.js',实现
// new Vue({ el: '#app',router: router, store: store, template: '<App/>',components: { App }})
