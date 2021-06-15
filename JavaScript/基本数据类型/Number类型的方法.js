let a = 10 // 整数
let b = NaN // 无效数值
let c = Infinity // 无限
let d = '' // 空字符串
let e = 'asdas' // 字符串
let f = new Object() // 对象
let g = null // 空
let h; // 未定义
let i = 0 // 整数0
let j = true // 布尔true
let p = 'asdasd1231321' // 数字+字符串
let fun = function () {} // 函数


console.log('整数10：' + Number(a)) // 整数10：10
console.log('无效数值 NaN：' + Number(b)) // 无效数值 NaN：NaN
console.log('无限：' + Number(c)) // 无限：Infinity
console.log('空字符串：' + Number(d)) // 空字符串：0
console.log('字符串：' + Number(e)) // 字符串：NaN
console.log('对象：' + Number(f)) // 对象：NaN
console.log('空：' + Number(g)) // 空：0j
console.log('未定义：' + Number(h)) // 未定义：NaN
console.log('整数0：' + Number(i)) // 整数0：0
console.log('布尔：' + Number(j)) // 布尔：1
console.log('数字+字符串：' + Number(p)) // 数字+字符串：NaN
console.log('函数：' + Number(fun))  // 函数：NaN

//-------------------------------------------------------------------------------------------------------------------------

// ParseInt()
// 除了整型和数字+字符串，其他都为Nan
console.log('整数10：' + parseInt(a))  // 整数10：10
console.log('无效数值 NaN：' + parseInt(b)) // 无效数值 NaN：NaN
console.log('无限：' + parseInt(c)) // 无限：NaN
console.log('空字符串：' + parseInt(d)) // 空字符串：NaN
console.log('字符串：' + parseInt(e)) // 字符串：NaN
console.log('对象：' + parseInt(f)) // 对象：NaN
console.log('空：' + parseInt(g)) // 空：NaN
console.log('未定义：' + parseInt(h)) // 未定义：NaN
console.log('整数0：' + parseInt(i)) // 整数0：0
console.log('布尔：' + parseInt(j)) // 布尔：NaN
console.log('数字+字符串：' + parseInt(p)) // 数字+字符串：1231321
console.log('函数：' + parseInt(fun)) // 函数：NaN

console.log('------------------------------------------------------------------------------------------------------------------------')

// 除了整型和Infinity和数字+字符串，其他都为Nan
console.log('整数10：' + parseFloat(a, 16)) // 整数10：10
console.log('无效数值 NaN：' + parseFloat(b)) // 无效数值 NaN：NaN
console.log('无限：' + parseFloat(c)) // 无限：Infinity
console.log('空字符串：' + parseFloat(d)) // 空字符串：NaN
console.log('字符串：' + parseFloat(e)) // 字符串：NaN
console.log('对象：' + parseFloat(f)) // 对象：NaN
console.log('空：' + parseFloat(g)) // 空：NaN
console.log('未定义：' + parseFloat(h)) // 未定义：NaN
console.log('整数0：' + parseFloat(i)) // 整数0：0
console.log('布尔：' + parseFloat(j)) // 布尔：NaN
console.log('数字+字符串：' + parseFloat(p)) // 数字+字符串：1231321
console.log('函数：' +  parseFloat(fun))


console.log('------------------------------------------------------------------------------------------------------------------------')

// isNaN是按照Number（）转换来进行的,不完全是（数字+字符串）
console.log('整数10：' + isNaN(a)) // 整数10：false
console.log('无效数值 NaN：' + isNaN(b)) // 无效数值 NaN：true
console.log('无限：' + isNaN(c)) // 无限：false
console.log('空字符串：' + isNaN(d)) // 空字符串：false
console.log('字符串：' + isNaN(e)) // 字符串：true
console.log('对象：' + isNaN(f)) // 对象：true
console.log('空：' + isNaN(g)) // 空：false
console.log('未定义：' + isNaN(h)) // 未定义：true
console.log('整数0：' + isNaN(i)) // 整数0：false
console.log('布尔：' + isNaN(j)) // 布尔：false
console.log('数字+字符串：' + isNaN(p)) // 数字+字符串：true
console.log('函数：' +  isNaN(fun)) // 数字+字符串：true












