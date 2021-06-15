// includes表示包含的意思
// includes用来判断数组中是否包含某个指定值, 返回值是布尔值
// includes有2个参数， 一个是指定的值，一个是查找位置的索引,索引的默认值是0
let a  = [1, 2, 3, 4, 5, 6]

console.log(a.includes(5)) // true
console.log(a.includes(5, 0)) // true
// 如果索引大于等于数组的长度，则会返回 false，且该数组不会被搜索。

console.log(a.includes(5, 99)) // false

// 如果索引为负数，则按照数组的长度 + 负索引，也就是从数组的末尾往前几位，然后往后查找，其实也就是负数加上数组长度
console.log(a.includes(4, -4)) // true -4的位置是3
console.log(a.includes(4, -3)) // true -3的位置是4
console.log(a.includes(4, -2)) // false -2的位置是5
console.log(a.includes(4, -1)) // false -1的位置是6



// 另外的妙用
// includes() 方法有意设计为通用方法。它不要求this值是数组对象，所以它可以被用于其他类型的对象 (比如类数组对象)。
// 下面的例子展示了 在函数的 arguments 对象上调用的 includes() 方法。

function b () {
    console.log([].includes.call(arguments, 'a')) // true
    console.log([].includes.call(arguments, 'd')) // false
}

b('a', 'b', 'c')