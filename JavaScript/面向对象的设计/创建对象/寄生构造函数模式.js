function Person() {
    // 创造一个数组对象
    let arr = new Array()
    // 为数组添加参数
    arr.push.apply(arr, arguments)
    // 为数组设置输出
    arr.sayName = function () {
        return arr.join('|')
    }
    // 返回数组对象
    return arr
}
// 传递参数
let a = new Person(20, 30, 40, 50, 60)
// 输出结果
console.log(a.sayName())