// ES6的JavaScript也有类，跟java的类继承差不多
class Person {
    // constructor类似函数体
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    // 定义的方法
    sayName() {
        return this.name
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// 跟构造函数差不多
var a = new Person('老曹', 50)
console.log(a) // Person { name: '老曹', age: 50 }
console.log(a.sayName()) // 老曹

// 跟java的类也可以继承
// 要利用extends关键字实现继承
class Son extends Person{
    constructor() {
        // 利用super关键字继承父类
        super() // 第一次不调用参数的情况下
    }
}

var b = new Son()
console.log(b) // Son { name: undefined, age: undefined }
console.log(b.sayName()) // undefined

// 在不传递参数的情况下，子类完全继承了父类的属性和方法

// ------------------------------------------------------------------------------------------------------------------------------------------

// 传递参数

class Son1 extends Person {
    constructor(name, age, sex) {
        // 向父类传递参数
        super(name, age)
        // 设置自己的属性
        this.sex = sex
    }
    // 重写父类的方法
    sayName() {
        return this.sex
    }
}

var c = new Son1('老许', 20, '男')
console.log(c) // Son1 { name: '老许', age: 20, sex: '男' }
console.log(c.sayName()) // 男
