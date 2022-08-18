

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import znch from "./i18n/zh-CN"
import enus from './i18n/en_US'
import { my_i18n } from './config'

Vue.use(VueI18n)

const messages = {
  znch,
  enus
}


const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: 'znch',
  // set locale messages
  messages
})
//这是封装组件的国际化，一般不变
my_i18n((key, value) => i18n.t(key, value))

export default i18n