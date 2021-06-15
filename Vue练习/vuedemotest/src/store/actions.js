import {ADDTODOS, DELETETODOS, SELECTALLTODOS, DELETEALLTODOS} from './mutations-type'
export default {
    addTodos({commit}, todo) {
        commit(ADDTODOS, {todo})
    },
    deleteTodos({commit}, index) {
        commit(DELETETODOS, {index})
    },
    selectAllTodos({commit}, check) {
        commit(SELECTALLTODOS, {check})
    },
    deleteAllTodos({commit}) {
        commit(DELETEALLTODOS)
    }
}