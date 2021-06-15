define(function (require, exports, module) {
    // 引入依赖同步模块
    var m2 = require('../modules/module2')
    var m22 = '我是module2的' + m2.c
    module.exports = m22
    // 引入依赖异步模块
    require.async('../modules/module3', function (m3) {
        console.log('这是异步module3的' + m3.d)
    })
})