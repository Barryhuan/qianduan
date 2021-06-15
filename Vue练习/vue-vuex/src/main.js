import Vue from 'vue'
import App from './APP'
import store from './store'

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})