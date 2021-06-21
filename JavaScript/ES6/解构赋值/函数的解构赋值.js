// 函数的解构赋值有2种
// 第一种：参数是数组解构

function add([x, y]){
  return x + y;
}

console.log(add([2, 1])) // 3

// 第二种：参数是对象解构

function add1 ({x, y}) {
    return [x, y]
}

console.log(add1({x: 1, y: 2})) // [ 1, 2 ]


// 函数的参数也支持默认值

// 数组的默认值
// 数组的第一种情况：
function add2 ([x, y] = [0, 0]) {
    return [x, y]
}

console.log(add2()) // [ 0, 0 ]
console.log(add2([1, 3])) // [ 1, 3 ]
console.log(add2([2])) // [ 2, undefined ]
console.log(add2([])) // [ undefined, undefined ]

// // 数组的第二种情况：(推荐)
function add21 ([x = 0, y = 1]) {
    return [x, y]
}

// console.log(add21()) // [ 0, 0 ] 会报错
console.log(add21([1, 3])) // [ 1, 3 ]
console.log(add21([,2])) // [ 0, 2 ]
console.log(add21([])) // [ 0, 1 ]

// 对象的默认值
// 对象的第一种情况：(推荐)
function add3 ({x = 0, y = 0} = {}) {
    return [x, y]
}

console.log(add3()) // [ 0, 0 ]
console.log(add3({x: 3, y: 4})) // [ 3, 4 ]
console.log(add3({x: 3})) // [ 3, 0 ]
console.log(add3({})) // [ 0, 0 ]


// 对象的第二种情况
function add4 ({x, y} = {x: 0, y: 0}) {
    return [x, y]
}
console.log(add4()) // [ 0, 0 ] 跟上面的一样
console.log(add4({x: 3, y: 4}))  // [ 3, 4 ] 跟上面的一样
console.log(add4({x: 3})) // [ 3, undefined ] 这里不一样
console.log(add4({})) // [ undefined, undefined ] 这里不一样

// 上面代码是为函数add4的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果