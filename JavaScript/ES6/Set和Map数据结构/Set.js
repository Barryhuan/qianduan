// Set是一个类似数组，成员值都是唯一的，没有重复值的数据结构

/*
  属性：
    constructor：set的构造函数
    size：set数据的成员数量
  方法：
    操作方法：
      add(value)：添加成员，返回set本身
      delete()：删除成员，返回布尔值，表示删除是否成功
      has()：判断成员是否存在，返回布尔值，表示成员是否存在
      clear()：清空set的所有成员，没有返回值

    遍历方法：
      keys()：返回键名的遍历器
      values()：返回键值的遍历器
      entries()：返回键值对的遍历器
      forEach()：使用回调函数遍历每一个成员
  应用：常用于去重
*/

//~ 创建一个set数据结构
//~ Set函可以接受数据（具有iterable接口的数据结构）作为参数，用作初始化

//? 数组
let set1 = new Set([1, 2, 3, 4, 5])
// console.log(set1) // Set(5) { 1, 2, 3, 4, 5 }

//? 字符串
let set2 = new Set('123456')
// console.log(set2) // Set(6) { '1', '2', '3', '4', '5', '6' }

//~ set操作方法
let set3 = new Set()

//? 添加成员
set3.add([1, 2, 3, 4]).add([6, 7, 8]).add(3)  // Set(3) { [ 1, 2, 3, 4 ], [ 6, 7, 8 ], 3 }

//? 删除成员
set3.delete(3) // true
// console.log(set3) // Set(2) { [ 1, 2, 3, 4 ], [ 6, 7, 8 ] }

// 这样创建一个值相等新的对象是无法删除set里面的旧对象的
set3.delete([1, 2, 3, 4]) // false
// console.log(set3) // Set(2) { [ 1, 2, 3, 4 ], [ 6, 7, 8 ] }

// 用有赋值遍历的对象是可以删除的
let arr1 = [3, 4, 5, 6]
set3.add(arr1) // Set(3) { [ 1, 2, 3, 4 ], [ 6, 7, 8 ], [ 3, 4, 5, 6 ] }
set3.delete(arr1) // Set(2) { [ 1, 2, 3, 4 ], [ 6, 7, 8 ] }

//? 判断成员是否存在
let set4 = new Set()
set4.add(4).add(1).add(3)
set4.has(3) // true

//? 清除所有成员
set4.clear() // Set(0) {}

//~ set遍历方法
// set数据结构没有键名，所以keys()输出的也是键值
let set5 = new Set().add(1).add(2).add(3).add(['red', 'blue', 'green'])
//? keys()
for (let x of set5.keys()) {
  console.log(x)
}

//? values()
for (let x of set5.values()) {
  console.log(x)
}
/*

keys()：
  1
  2
  3
  ['red', 'blue', 'green']

values()：
  1
  2
  3
  ['red', 'blue', 'green']

*/

// 要是只要单独的数组，则直接调用数组里的遍历器进行遍历
let set6 = new Set(['red', 'blue', 'green'])
for (let x of set6.keys()) {
  console.log(x)
}

/*
  red
  blue
  green
*/

//? entries()
let set7 = new Set([1, 2, 3, 4])
for (let x of set7.entries()) {
  console.log(x)
}

/*
  [ 1, 1 ]
  [ 2, 2 ]
  [ 3, 3 ]
  [ 4, 4 ]
*/

//? forEach()
// forEach的参数和数组是相同的
let set8 = new Set([1, 2, 3, 4, 5, 6])
set8.forEach((value, key, self) => console.log(value, key, self))
/*
  1 1 Set(6) { 1, 2, 3, 4, 5, 6 }
  2 2 Set(6) { 1, 2, 3, 4, 5, 6 }
  3 3 Set(6) { 1, 2, 3, 4, 5, 6 }
  4 4 Set(6) { 1, 2, 3, 4, 5, 6 }
  5 5 Set(6) { 1, 2, 3, 4, 5, 6 }
  6 6 Set(6) { 1, 2, 3, 4, 5, 6 }
*/

//~ 数组和set结合实现去重复操作

function dedupe(arr) {
  return Array.from(new Set(arr))
}

let arr = [1, 1, 2, 3, 4, 4, 5]
dedupe(arr) // [ 1, 2, 3, 4, 5 ]

//~ set转数组

//* 1
let setToArr = new Set([1, 2, 3, 4]) // Set(4) { 1, 2, 3, 4 }
let fromArr = [...setToArr] // [ 1, 2, 3, 4 ]

//* 2
let fromArr2 = Array.from(setToArr) // [ 1, 2, 3, 4 ]


