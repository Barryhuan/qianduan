function Person() {
    var arr = new Array()
    arr.push.apply(arr, arguments)
    arr.sayArray = function () {
        return arr.join('---')
    }
    return arr
}

var a = new Person('老王', 20, '男')
console.log(a)
console.log(a.sayArray())

// 在构造函数里创建独特的对象