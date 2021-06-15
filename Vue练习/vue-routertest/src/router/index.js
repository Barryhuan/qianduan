import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../view/About.vue'
import Home from '../view/Home.vue'
import News from '../view/News.vue'
import Message from '../view/Message.vue'
import MessageDetail from '../view/MessageDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/about'
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [

                {
                    path: '/home/news',
                    component: News
                },
                {
                    path: '/home/message',
                    component: Message,
                    children: [
                        {
                            path: '/home/message/messagedetail/:id',
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