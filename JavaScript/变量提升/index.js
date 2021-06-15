// ~ JavaScript引擎在运行代码的时候分2步执行
//! 1. 预解析（变量提升）
//! 2. 执行代码

//? 预解析分为3种：变量提升， 函数提升，函数表达式提升

// * 变量提升

console.log(a)
var a = '1'

//- 解析
var a
console.log()
a = 1


// * 函数提升
console.log(a())
function a () {
  console.log('我是a')
}

//- 解析
function a () {
  console.log('我是a')
}
console.log(a())


// * 函数表达式提升
console.log(a())
var a = function () {}

// - 解析
var a
console.log(a()) // 输出：a is a not function
a = function () {}

// -------------------------------------------

// *  情况
//! 同名的变量和函数同时提升（同名情况下，函数的优先级 > 变量）

console.log(a)
function a () {}
var a = 'a'

// - 解析
function a() {}
var a
console.log(a) // ~ 输出：function a () {}
a = 'a'

// - 另一种写法
var a = function () {}
var a // a这里只是声明，并没有赋值，所以a输出的还是函数
console.log(a) // ~ 输出：function a () {}
a = 'a'


//! 同名的函数提升
f1()

function f1() {
  console.log('我是f1')
}

f1()

function f1() {
  console.log('我是f11')
}

// - 解析
function f1() {
  console.log('我是f1')
}

function f1() {
  console.log('我是f11')
}

// 同名函数会覆盖

f1() // ~ 输出：我是f11

f1() // ~ 输出：我是f11

//! 变量提升时有立即执行表达式

var a = 10
;(function () {
  console.log(a)
  a = 5
  console.log(window.a)
  var a = 20
  console.log(a)
})()


// - 解析
var a
a = 10 // 这里定义的是全局变量
;(function() {
  var a
  console.log(a) // ~ 输出：undefined
  a = 5 // 局部变量
  console.log(window.a) // ~ 输出：10(这里引用的是window对象的a变量)
  a = 20
  console.log(a) // ~ 输出：20
})()

