// 箭头函数的特性：函数体里面的this永远与外部的this保持一致
// 模仿一个点击事件
var click = function () {
    setTimeout(function () {
        console.log(this)
        // 这里的this指向的window，原因是没有形成闭包
    }, 2000)
}
click()

// 而用了箭头函数，这个this指向的是外部的this
var click = function () {
    setTimeout(() => {
        console.log(this)
        // 这里的this指向的外部要点击的DOM对象
    })
}



function add(x, y) {
    return x + y
}
// 形式有3种
// 一般形式
var add = (x, y) => {
    return x + y
}

// 第一种,形参只有一个参数
var add = x => {
    return x + 10
}

// 第二种，{}只有一行代码,return要省略，不然会报错
var add =  (x, y) => x + y

// 第三种，形参和{}都只有一行
var add = x => x + 10

// 第四种，代码块里的({})相当于return {} ，返回一个对象

var bb = x => ({
    name: '老许'
})

var cc = x => {
    return {
        name: '老王'
    }
}

console.log(cc())
console.log(bb())

