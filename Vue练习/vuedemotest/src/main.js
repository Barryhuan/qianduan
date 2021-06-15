import Vue from 'vue'
import App from './App'
import store from './store/index'
import './base.css'

new Vue({
    el: '#app',
    render: h => h(App),
    store
})

