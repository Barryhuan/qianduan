//! 1. 三点运算符的基础操作
//~ 作用于数组时，则可以代替整个数组插入到其他数组当中
// 因为三点运算符会将数组或伪数组转化为以逗号区分的参数序列
var aar1 = [1, 2, 3, 4, 5]
var aar2 = [1, ...aar1, 6, 6, 6]
aar2 // [ 1, 1, 2, 3, 4, 5, 6, 6, 6 ]


//~ 作用于函数参数时，用来代替arguments的，拥有数组的方法和属性
// 当...作为函数参数时，则代替传入的参数，要是前面有其他命名参数的时候，则占用一个位置，...则为剩下的数
// 而且...只能作为最后一个参数，否则会报错


function Person(a, ...array) {
    this.a = a
    this.b = array
}

var a = new Person(1, 2, 3, 4, 5)
a.a // 1
a.b // [ 2, 3, 4, 5 ]

var b = new Person(4, 3, 6, 6, 6, 6)
b.a // 4
b.b // [ 3, 6, 6, 6, 6 ]


//~ 三点运算符与正常的函数参数可以结合使用，非常灵活
function f(v, w, x, y, z) {
  return v + w + x + y + z
}
const args = [0, 1];
f(-1, ...args, 2, ...[3]);


//~ 三点运算符后面还可以放置表达式
const arr = [...(5 > 0 ? ['a'] : []),
  'b',
];


//~ 如果扩展运算符后面是一个空数组，则不产生任何效果
[...[], 1] // []


//! 2. 三点运算符替代函数的apply()方法
//~ 调用函数
function f(x, y) {
  return x + y
}

//* es5写法
f.apply(null, [1, 2]) // 3

//* es6写法
f(...[1, 2]) // 3


//~ 求数组最大值

//* es5写法
Math.max.apply(null, [1, 2, 3]) // 3

//* es6写法
Math.max(...[1, 2, 3])


//! 3. 扩展运算符的应用
//~ 1. 复制数组
// 通过这种方式复制的是浅拷贝
let a11 = [1, 2, 3]

//* 写法1
let a22 = [...a11] // [ 1, 2, 3 ]

//* 写法2
let [...a33] = a11


//~ 2. 合并数组
let b11 = [1, 2 ,3]
let b22 = [4, 5, 6]
let b33 = [7, 8, 9]
let bAll = [...b11, ...b22, ...b33] // 1, 2, 3, 4, 5, 6, 7, 8


//~ 3. 结合解构赋值
// 用于数组赋值，只能放在参数的最后一位，否则会报错
let [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

let [first1, ...rest1] = [];
first1 // undefined
rest1  // []

let [first2, ...rest2] = ["foo"];
first2  // "foo"
rest2   // []


//~ 4. 集合字符串
let str = [...'hello'] // // [ "h", "e", "l", "l", "o" ]


//~ 5. 实现了Iterator接口的对象
// 任何定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组
function qq() {
  console.log(...arguments)
}

qq(1, 2, 3, 4, 5) // 1 2 3 4 5


//~ 6. Set，Map和Generator函数
//* Set
let set = new Set([1, 2, 3])

console.log([...set]) // [ 1, 2, 3 ]

//* Map
let map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
])

console.log([...map.keys()]) // [ 'a', 'b', 'c' ]

//* Generator函数
function* g() {
  yield 1
  yield 2
  yield 3
}

console.log([...g()]) // [ 1, 2, 3 ]









