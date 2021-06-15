let a = [10, 30, 50, 20]
console.log(a)
// 通过位置方法可以查到项在数组在哪个位置上
console.log(a.indexOf(20))
console.log(a.indexOf(20, 2))
// 通过相反的位置查到项在数组的哪个位置上

console.log(a.lastIndexOf(30))
console.log(a.lastIndexOf(30, 2))

// 反序查找就是从2这个索引位置往前找
// 例如：索引2的位置是50，那么这个方法就会从50往索引0的方向去找30