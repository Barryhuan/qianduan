// Array.from()是将一个伪数组或者可迭代的对象转化为一个浅拷贝的数组
var iterrator = {0: 'a', 1 : 'b', 2: 'c', length: 3} // 伪数组要有若干索引和一个length属性
console.log(Array.from(iterrator)) // [ 'a', 'b', 'c' ]

var str = 'abc' // 可迭代一个对象
console.log(Array.from(str)) // [ 'a', 'b', 'c' ]

// Array.from()的参数： 对象， 对每一项进行的函数， 函数的this对象

var obj = {0: 'a', 1 : 'b', 2: 'c', length: 3}
console.log(Array.from(obj, x => {
    return x + 'obj'
}))
// [ 'aobj', 'bobj', 'cobj' ]