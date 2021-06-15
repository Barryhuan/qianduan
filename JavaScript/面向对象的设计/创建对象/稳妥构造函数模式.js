function Person (name, age, sex) {
    let o = new Object()
    o.age = age
    o.sayName = function () {
        console.log(name + age + sex)
    }

    return o
}

let a = Person('老王', 20, '男')
a.sayName()

// 构造函数无法使用new,实例的方法不能有this
// 用在安全的环境下