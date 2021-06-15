// 闭包的定义：
// 1.闭包是指有权访问另外一个函数作用域变量的函数
// 2.闭包是内部函数引用外部函数变量所产生的对象
// 3.内部函数定义的时候闭包就存在了

// 创建闭包的条件：
// 1.包含在一个函数内部的函数
// 2.引用了上一个作用域的变量

// 闭包的作用：
// 1.可以延长局部变量的生命周期
// 2.外部可以获取函数内部的变量进行操作

// 闭包的应用：
// 1.封装私有变量
// 2.模仿块级作用域
// 3.JS的模块化

// 闭包的生命周期：
// 开始：当内部函数定义的时候
// 结束：当内部函数没有被引用，或者引用时设置为null

// 闭包的弊端：
// 内存溢出：程序生成过多的内存，造成程序奔溃，出现错误
// 内存泄漏：程序产生多余的内存，造成运行内存空间不足，导致内存溢出
// 1. 不清理定时器和回调函数
// 2. 意外的全局变量
// 3. 闭包

// 实现一个简单的闭包功能
// 1.
function person() {
    let item = 'a'
    function b () {
        let c = 'b' + item
        console.log(c)
    }
    return b
}

person()()

// 2.

function f1() {
    let a = 2
    function f2() {
        a++
        console.log(a)
    }
    return f2
}

let f = f1()
f() // 3
f() // 4

// 3.

var data = []
for(var i = 0; i < 3; i++) {
    data[i] = function () {
        console.log(i)
    }
}

data[0]() // 3
data[1]() // 3
data[2]() // 3

// 由于在执行data[0]()的时候，全局执行上下文的变量对象时，for已经循环完成了，而且function要读取父级作用域的变量，i已经成为3了

// 解决1

var arr = []
for (var j = 0; j < 3; j++) {
    arr[j] = (function (j) {
        return function () {
            console.log(j)
        }
    })(j)
}

arr[0]() // 0
arr[1]() // 1
arr[2]() // 2

// 由于console执行的代码中药引用j，就会查找当前作用域有无j这个变量，无则向上一下父作用域查找，往作用域向上查找，当匿名作用域中的arguments参数对象里有j这个变量时，则查到了

// 方法2：利用let形成块级作用域
var data1 = []
for (let q = 0; q < 3; q++) {
    data1[q] = function () {
        
        console.log(q)
    }
}

data1[0]() // 0
data1[1]() // 1
data1[2]() // 2