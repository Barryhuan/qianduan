define(function(require, exports, module) {
    let a = '我的module1的a'
    function b() {
        return a
    }
    module.exports = {b}
})