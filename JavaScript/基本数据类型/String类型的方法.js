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

console.log('整数10：' + a.toString()) // 整数10：10
console.log('无效数值 NaN：' + b.toString()) // 无效数值 NaN：NaN
console.log('无限：' + c.toString()) // 无限：Infinity
console.log('空字符串：' + d.toString()) // 空字符串：
console.log('字符串：' + e.toString()) // 字符串：asdas
console.log('对象：' + f.toString()) // 对象：[object Object]
console.log('空：' + String(g)) // 空：null
console.log('未定义：' + String(h)) // 未定义：undefined
console.log('整数0：' + i.toString()) // 整数0：0
console.log('布尔：' + j.toString()) // 布尔：true

// 在String的方法中，只有null和undefined需要用到String（）方法