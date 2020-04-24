import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(Vuex)
Vue.use(ViewUI)

// 阻止启动生产消息，常用作指令
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// runtime模式
// new Vue({ router,store,  render: h => h(App)}).$mount("#app")
// compiler模式,配置vue.config.js中的'vue$': 'vue/dist/vue.esm.js',实现
// new Vue({ el: '#app',router: router, store: store, template: '<App/>',components: { App }})
