import Vue from 'vue';
export default {
  bind(el, { value }) {
    const SSR = Vue && Vue.prototype.$isServer
    if (typeof value == 'function' && !SSR) {
      window.addEventListener('scroll', value,true)
    }
  },
  unbind(el, { value }) {
    if (typeof value == 'function')
      window.removeEventListener('scroll', value,true)
  }
}