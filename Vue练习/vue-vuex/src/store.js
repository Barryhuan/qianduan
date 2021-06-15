// 导入Vue
import Vue from 'vue'
// 导入Vuex插件
import Vuex from 'vuex'
// 使用Vue插件
Vue.use(Vuex)
// 声明状态（存储vue对象的属性的对象）
const state = {
    count: 0
}
// 存储事件的函数的对象
// actions调用commit激活mutations方法
const actions = {
    increment ({commit}) {
        commit('increment')
    },
    decrement ({commit}) {
        commit('decrement')
    },
    incrementInfo ({commit, state}) {
        if (state.count%2 === 1) {
            commit('increment')
        }
    },
    incrementAsync ({commit}) {
        setTimeout(()=> {
            commit('increment')
        }, 1000)
    }
}
// 存储更新界面的函数对象
const mutations = {
    increment (state) {
        state.count++
    },
    decrement (state) {
        state.count--
    }
}
// 存储计算方法
const getters = {
    evenOrOdd (state) {
        return state.count % 2 === 0 ? '偶数' : '奇数'
      }
}
// 向外暴露Vuex的Store方法
export default new Vuex.Store({
    state, // 状态对象
    actions, // 包含多个对应事件回调函数的对象
    mutations, // 包含多个更新state函数的对象
    getters // 包含多个getter计算属性函数的对象
})