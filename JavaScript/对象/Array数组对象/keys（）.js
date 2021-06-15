// keys方法返回一个包含数组中每个索引键的Array Iterator对象
// 但是这个Interator对象是只能迭代出来的，打印出来的是一个空对象

var a = ['a', 'b', 'c', 'd', 'e', 'e']

console.log(a.keys()) // Object [Array Iterator] {}
var b = a.keys()
console.log(b)



for (let key of b) {
    console.log(key)
}

for (let key of a.values()) {
    console.log(key)
}

// 0
// 1
// 2
// 3
// 4
// 5

// 将打印数组里每一项的索引值