// 基本值 -----------------------------------------------------------------------------------------------------------------------------------------
function Father(name) {
    this.name = name
}
// 可以向Father构造函数添加参数
function Son(name, age) {
    Father.call(this, name)
    this.age = age
}

let a = new Son('老王', 20)
console.log(a.name)
console.log(a.age)

let b = new Son('老许', 21)
console.log(b.name)
console.log(b.age)

// 引用类型的值
function Father1 () {
    this.arr = [20, 30, 40, 50]
}

function Son1 () {
    Father1.call(this)
}

let a1 = new Son1()
a1.arr.push(20, 20, 20)
console.log(a1.arr)

let b1 = new Son1()
b1.arr.push(6, 6, 6)
console.log(b1.arr)

// 优点：1.可以向超类型传递参数
//      2.引用类型的值可以独立不分享

// 缺点：要是构造函数里有方法，每次实例化都会多创造函数
