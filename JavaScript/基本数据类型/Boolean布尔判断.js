let a = 10 // 整数
let b = NaN // 无效数值
let c = Infinity // 无限
let i = 0 // 整数0
let e = 'asdas' // 字符串
let d = '' // 空字符串
let f = new Object() // 对象
let g = null // 空
let h; // 未定义
let j = true // 布尔true
let p = function () { // 函数true

}

console.log('整数10：'+Boolean(a)) // 整数10：true
console.log('无限：'+Boolean(c)) // 无限：true
console.log('无效数值 NaN：'+Boolean(b)) // 无效数值 NaN：false
console.log('整数0：'+Boolean(i)) // 整数0：false    
console.log('字符串：'+Boolean(e)) // 字符串：true 
console.log('空字符串：'+Boolean(d)) // 空字符串：false
console.log('对象：'+Boolean(f)) // 对象：true
console.log('空：'+Boolean(g)) // 空：false
console.log('未定义：'+Boolean(h)) // 未定义：false
console.log('布尔：'+Boolean(j)) // 布尔：true
console.log('函数：'+Boolean(p)) // 函数：true


// 整数（除0和Nan）和无限，字符串（除空字符串），对象，布尔 为true
// 0 , Nan, '', null, undefined