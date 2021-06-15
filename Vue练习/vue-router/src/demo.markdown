# Vue-router的使用

## 1. 安装Vue-router（如果无效则在搭手脚架的使用Vue-router插件）
    npm install vue-router -s

## 2.创建router组件
    例如：Home，About

## 3.创建vue-router配置文件（index.js）
	// 导入Vue
	import Vue from 'vue'
	
	// 导入vue-router
    import VueRouter from 'vue-router'
	
	// 导入router组件：Home
    import Home from './views/Home'
	
	// 导入router组件：About
    import About from './views/About'
	
	// 使用vue插件
    Vue.use(VueRouter)
	
	// 向外暴露VueRouter的配置对象
    export default new VueRouter({
		// 创建路由
        routes: [
            {
                path: '/',
                redirece: '/about'
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/home',
                component: Home
            }
        ]
    })
	

## 4.注册路由（main.js文件中）
	import router from '/router'
	new Vue({
		router
	})
## 5.使用路由组件（App.vue文件）
	使用路由组件：<router-link to='组件的path'>组件的component</router-link>
	显示当前路由组件：<router-view></router-view>