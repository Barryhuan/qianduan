import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
let makeMethod = (Vue, option) => {
  console.log(option)
  Vue.myGlobalMethod = (a, b) => {
    console.log(a, b)
  }
  Vue.directive('focus', (el, binding) => {
    console.log(el, binding)
  })
  Vue.prototype.aaa = '1111'
}
Vue.use(makeMethod, { c: 1, d: 2 })
Vue.myGlobalMethod(1, 2)
new Vue({
  render: h => h(App),
}).$mount('#app')