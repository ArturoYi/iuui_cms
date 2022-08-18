import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import i18n from "@/lang/index"
// 自動註冊組件
import "@/components/index.js"
// 全局工具函數
import "@/utils/index"
// 暂时

Vue.config.productionTip = false
//註冊一個事件總線
// Vue.prototype.$EventBus = new Vue()
// import VueCodemirror from 'vue-codemirror'
// import 'codemirror/lib/codemirror.css'
// Vue.use(VueCodemirror)

const AppInstance = new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 设置 App 实例
window.App = AppInstance
