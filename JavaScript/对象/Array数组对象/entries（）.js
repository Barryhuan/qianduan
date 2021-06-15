// entries方法返回一个Array Interator对象，该对象包含数组中每个索引的键/值对

var a = [1, 2, 3, 4, 5, 6]
console.log(a.entries()) // Object [Array Iterator] {}

var b = a.entries()

// 1. 通过遍历循环获取
// for (let key of b ) {
//     console.log(key)
// }

// [ 0, 1 ]
// [ 1, 2 ]
// [ 2, 3 ]
// [ 3, 4 ]
// [ 4, 5 ]
// [ 5, 6 ]
// 2. 也可以这样获取键值对
console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().done)
// 1和2只能取其中的一个方法来实现