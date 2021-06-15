let a = [20, 30, 50, 60, 40]

// 通过迭代方法every可以判断数组里是否都符合条件的 // true
console.log(a.every(function (item, index, array) {
    return (item > 10)
}))

// 通过迭代方法some可以判断数组里是否有符合条件的 // true
console.log(a.some(function (item, index, array) {
    return (item > 20)
}))

// 通过迭代方法filter可以判断数组里是否符合条件的项，并返回 // [ 30, 50, 60, 40 ]
console.log(a.filter(function (item, index, array) {
    return (item > 20)
}))

// 通过迭代方法map可以给数组的值添加同种结果 // [ 40, 60, 100, 120, 80 ]
console.log(a.map(function (item, index, array) {
    return item + `：${index}`
}))
let b  = []
// forEach类似for循环 // undefined
console.log(a.forEach(function (item, index, array) {
   b.push(item + index)
}))
console.log(b) // [ 20, 31, 52, 63, 44 ]


// find迭代数组里的每一项，返回第一个符合条件的第一项 // 30
console.log(a.find(function (item, index, array) {
    return index > 2
}) )

// findIndex迭代数组里的每一项，返回第一个符合条件的索引值 // 1

console.log(a.findIndex(function (item, index, array) {
    return item > 20
}))

