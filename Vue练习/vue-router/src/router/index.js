import Vue from 'vue' // 导入vue对象
import VueRouter from 'vue-router' // 导入vue-router插件
import About from '../views/About' // 导入About组件
import Home from '../views/Home' // 导入Home组件
import News from '../views/News' // 导入News组件
import Message from '../views/Message' // 导入Message组件
import MessageDetail from '../views/MessageDetail' // 导入MessageDetail组件
Vue.use(VueRouter) // 使用Vue对象的use来使用插件,使用后vue实例会有2个属性，一个是$route,一个是$router


export default new VueRouter({ // 向外暴露一个Vue-Router对象实例
    // 用来保存路由的数组
    routes: [
        {
            path: '/', // 路由根路径
            redirect: '/about' // 路由首页的路径
        },
        {
            path: '/about', // about路径
            component: About // 存入导入的组件对象
        },
        {
            path: '/home', // home路径
            component: Home, // 存入导入的组件对象
            children: [ // 路由下面的子路由
                {
                    path: '/home/news',
                    component: News
                },
                {
                    path: '/home/message',
                    component: Message,
                    children: [
                        {
                            path: '/home/message/detail/:id',
                            component: MessageDetail
                        }
                    ]
                },
                {
                    path: '',
                    redirect: '/home/news'
                }
            ]
        }
    ]
})