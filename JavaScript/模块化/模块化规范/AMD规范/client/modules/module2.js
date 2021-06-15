// 定义有依赖的模块
define(['module1', 'jquery'], function (m1, $) {
    let c = '我是module2的c'
    function d() {
        return c + m1.b
    }
    return {d}
})