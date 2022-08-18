import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import createLogger from 'vuex/dist/logger'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  key: 'vuex',
  storage: window.localStorage,
  reducer: stateData => ({
    // eslint-disable-line
    //路由配置
    // routerConfig: stateData.routerConfig,
    // 舞台深度
    sideBarLevel: stateData.sideBarLevel,
    // 權限和當前用戶信息
    permissions: stateData.permissions,
    user: stateData.user,
    //主題
    themeName: stateData.themeName,
    language: stateData.language,
    //這裡上面的需要保存到localstorage
    //屏幕寬度
    resize: stateData.resize,
  }),
})

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [vuexLocal.plugin, createLogger()],
  // modules: {
  //   //這裡分模塊管理暫時用不到
  // }
})
