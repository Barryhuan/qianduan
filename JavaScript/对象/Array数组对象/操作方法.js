let a = [10, 50, 20, 30, 10]
let b = [20, 30, 40, 90, 80]
console.log(a)
// 通过concat方法可以创建一个新的数组并为其添加数值和数组
console.log(a.concat(10, 30, 30, 30, b))
console.log(a)
// 通过slice方法选取方位内的值可以创建一个新的数组，不包括最后一项
console.log(a.slice()) // [ 10, 50, 20, 30, 10 ]
console.log(a.slice(1)) // [ 50, 20, 30, 10 ]
console.log(a.slice(0, 4)) // [ 10, 50, 20, 30]
console.log(a.slice(-2, -1)) // -2 == 5 - 2 = 3， -1 == 5-1 = 4 // 30

// 通过splice方法在数组中插入项
console.log('删除项：' + a.splice(0, 1))
console.log(a) // [ 50, 20, 30, 10 ]
console.log('插入项：' + a.splice(0, 0, 10, 20))
console.log(a) // [ 10, 20, 50, 20, 30, 10 ]
console.log('替换项：' + a.splice(0, 2, 30,30))
console.log(a) // [ 30, 30, 50, 20, 30, 10 ]
