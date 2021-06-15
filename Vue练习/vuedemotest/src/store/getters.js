export default {
    computedSize(state) {
        return state.todos.reduce((pretodo, todo) => pretodo + (todo.complate ? 1 : 0), 0)
    },
    todoslength(state) {
        return state.todos.length
    },
    isAllChecks(state, getters) {
        return getters.todoslength === getters.computedSize && state.todos.length > 0
    }
}