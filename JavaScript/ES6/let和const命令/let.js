// let的作用
// 1.块级作用域
// 2.不能声明同样的值
// 3.没有预解析

// 预解析
// var 和 let 的区别
console.log(a)
let a = '我是a'
// // a is not defined

console.log(b)
var b = '我是b'
// undefined

// 块级作用域
for(var i = 1; i < 10; i++) {
    var c = '老王'
}
console.log(i)
console.log(c)
// i = 10， c = '老王
// 里面的变量可以在外部访问

// 用let的在外部访问不到，要是用var还是可以在外部访问的到
for(let j = 1; j < 10; j++) {
    let d = '老许'
    // var d = '老许'
}
console.log(j)
console.log(d)

// 这样的模仿块级模块，里面的变量都访问不到
(function () {
    for(let q = 1; q < 10; q++) {
         var g = '老许'
    }
})()
console.log(q)
console.log(g)