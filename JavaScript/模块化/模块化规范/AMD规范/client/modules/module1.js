// 定义没有依赖的模块
define(function () {
    let a = '我的module1的a'
    function b() {
        return a
    }
    return {b}
})