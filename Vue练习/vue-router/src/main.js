// 导入vue对象
import Vue from 'vue'
// 导入app组件
import App from './App'
// 导入vue-router向外暴露的实例对象
import router from './router'
// 创建一个vue实例
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
})