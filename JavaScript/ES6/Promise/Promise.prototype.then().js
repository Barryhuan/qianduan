// promise.pototype.then()是接受promise对象的调用对应的回调函数方法

// then方法的参数：有2个参数，都是带参数的函数,第二个参数是可选的

// 第一个是对应resolve的回调，第二个是对应rejected的回调

// then(function(resolve) {}, function (rejected) {})

// 作用1：根据promise的状态来调用相对应的回调函数（resolve，reject）

var p1 = new Promise((resolve, reject) => {
    resolve('aaa')
})

p1.then(function (value) {
    console.log(value)
})

// aaa

// 作用2：一个promise对象可以对应多个then方法
var p2 = new Promise((resolve, reject) => {
    resolve()
})

p2.then(function () {
    console.log('b1b1b1')
})
// b1b1b1
p2.then(function () {
    console.log('b2b2b2')
})
// b2b2b2

// 作用3：then方法执行完后会返回一个新的promise对象
var p3 = new Promise((resolve, reject) => {
    resolve()
})

var pp3 = p3.then(function () {
    console.log('成功！')
}, function () {
    console.log('失败！')
})

console.log(pp3) // Promise { <pending> }
console.log(p3 === pp3) // false

// 作用4：上一个Promise对象的then方法可以为下一个Promise对象的then方法提供(参数(不是promise对象))，无论上一个promise的状态如何，都是调用resolve回调函数

var p4 = new Promise((resolve, reject) => {
    resolve('aaa')
})

var pp4 = p4.then(function (value) {
    console.log(value)
    return 'a1a1a1'
}, function (error) {
    console.log(error)
})
// aaa
pp4.then(function (value) {
    console.log(value)
})
// a1a1a1

// 作用5：上一个Promise的then方法为下一个then方法提供Promise对象，则会根据这个提供的Promise对象的状态做对应的回调
var p5 = new Promise((resolve, reject) => {
    resolve('a5a5a5')
})

var p6 = new Promise((resolve, reject) => {
    reject('b5b5b5')
})

var pp5 = p5.then(function (value) {
    console.log(value) // a5a5a5
    return p6
}, function (error) {
    console.log(error)
})

pp5.then(function (value) {
    console.log('成功！',value)
}, function (error) {
    console.log('失败！', error)
})
// 失败！ b5b5b5