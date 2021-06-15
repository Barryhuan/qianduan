// 对象和数组的解构赋值

// 对象
let obj = {
    username : '老王',
    age : 20
}

let {username, age} = obj
console.log(username, age)
// 老王 20

// 相当于
// var username = obj.username
// var age = obj.age

// 数组
// 可以用任意字符代替，,,可以空出位置
let arr = [1, 3, 5, '我', '穷']
let [, , a, b, c] = arr
console.log(a, b, c)


// 字符串的解构赋值
// 利用数组解构
let str = 'String'

let [s, t, r, i, n, g] = str

console.log(
    s, // S
    t, // t
    r, // r    
    i, // i
    n, // n
    g // g
)
// 伪数组都有个length属性

let {length: len, 0: one} = str
console.log(len,one)




// 当解构赋值的右边如果不是对象或者数组的话将会进行转化为对象
// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError
