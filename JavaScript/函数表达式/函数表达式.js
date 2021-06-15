// 函数声明会提升不会报错
console.log(a())
function a() {
    return '你好呀!'
}

// 函数表达式会报错
console.log(b())
let b = function () {
    return '你也好呀！'
}
// b is not defined