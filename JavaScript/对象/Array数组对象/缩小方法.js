let a = [10, 20, 30, 40, 50, 60]
// 从正序计算数组里的值
console.log(a.reduce(function (prev, cur, index, array) {
    return prev + cur
}))
// 从反序计算数组里的值
console.log(a.reduceRight(function (prev, cur, index, array) {
    return prev + cur
}))