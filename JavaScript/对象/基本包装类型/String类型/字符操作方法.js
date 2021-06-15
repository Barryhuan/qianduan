// 操作字符串
// 第一种，concat方法，拼接字符串，但是还不如 + 来的快
let a = 'hello world'
console.log(a.concat(' mmp', ' 老王'))

// 第二种 slice, subtr, subtring
let b  = 'hello world'

console.log(b.slice()) // hello world
console.log(b.substr()) // hello world
console.log(b.substring()) // hello world

console.log(b.slice(1)) // ello world
console.log(b.substr(1)) // ello world
console.log(b.substring(1)) // ello world

console.log(b.slice(3, 7)) // lo w 范围3-7的字符串，不包括结束位置
console.log(b.substr(3, 7)) // lo worl 起始位置开始的7个字符串，包括开始位置
console.log(b.substring(3, 7)) // lo w 范围3-7的字符串，不包括结束位置

console.log(b.slice(-3))  // rld 负数加上字符串长度
console.log(b.substr(-3)) // rld  负数加上字符串长度
console.log(b.substring(-3)) // hello world 负数为0

console.log(b.slice(3, -4)) // lo w
console.log(b.substr(3, -4)) // 返回空字符串，因为sustr当第一个参数为负数时加上字符串长度， 第二个参数为负数时为0，当为0是长度为0.
console.log(b.substring(3, -4)) //1 hel substring会将负数都变成0，而且会将小数在前，大数在后，例如（3, 0 ）变成（0, 3）