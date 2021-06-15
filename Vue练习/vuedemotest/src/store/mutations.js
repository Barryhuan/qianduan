import {ADDTODOS, DELETETODOS, SELECTALLTODOS, DELETEALLTODOS} from './mutations-type'
export default {
    [ADDTODOS] (state, {todo}) {
        state.todos.unshift(todo)
    },
    [DELETETODOS] (state, {index}) {
        state.todos.splice(index, 1)
    },
    [SELECTALLTODOS] (state, {check}) {
        state.todos.forEach(todo => todo.complate = check)
    },
    [DELETEALLTODOS] (state) {
        state.todos = state.todos.filter(todo => !todo.complate)
    }
}