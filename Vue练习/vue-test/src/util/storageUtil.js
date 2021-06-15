// 设置常量保存字符串的值
const STORAGE_NAME = 'todos_key'
// 向外暴露一个对象，拥有读取功能的2个功能
export default {
    // 设置浏览器Storage的值
    saveTodos(todos) {
        window.localStorage.setItem(STORAGE_NAME, JSON.stringify(todos))
    },
    // 返回浏览器Storage的值
    readTodos() {
        return JSON.parse(window.localStorage.getItem(STORAGE_NAME) || '[]')
    }
}