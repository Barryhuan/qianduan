// 求最大值
let max = Math.max(10, 20, 30, 40, 50)
console.log(max)
// 求最小值
let min = Math.min(10, 20, 30, 40, 50)
console.log(min)
// ----------------------------------------------------------------------------------------------------------------
// 求数组最大值
let arr = [10, 20, 30, 40, 50]
let maxx = Math.max.apply(Math, arr)
console.log(maxx)
// 求数组最小值
let minn = Math.min.apply(Math, arr)
console.log(minn) 