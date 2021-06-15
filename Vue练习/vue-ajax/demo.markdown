## Vue的Ajax

### Vue-Resouce（非官方库，vue1.0使用的比较广泛）
1. 安装方式
    npm install vue-resource --save
2. 使用方式
    * 导入Vue-resource插件 import Vue-resource from 'vue-resource'
    * 使用resource插件 Vue.use(Vue-resource)，Vue对象会添加一个$http对象，里面有get和post方法
    * 在App组件里的script标签里的mound()调用异步的$http方法
    * this.$http.get(url).then()里面有2个参数，一个请求成功的函数，一个是请求失败的函数
    * 成功请求的函数，response.data里就是请求到响应回来的数据
    * 请求失败的函数，error就是个请求失败的函数
### axios（官方插件，vue2.0使用的比较广泛）
1. 安装方法
    npm install axios --save
2. 使用方法
    * 直接在要使用的组件里调用 import axios from 'axios'
    * 在mound()里使用 axios.get(url).then(成功请求的函数).catch(调用失败的请求)
