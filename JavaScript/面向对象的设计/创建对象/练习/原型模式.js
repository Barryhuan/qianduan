function Person() {}
Person.prototype.name = '老王'
Person.prototype.age = 20
Person.prototype.sex = '男'
Person.prototype.sayName = function() {
    return this.name
}

var a = new Person()
console.log(a)
console.log(a.sayName())
console.log(a.__proto__)

// 优点：共享属性和方法
// 缺点：无法传递参数，共享引用类型的值
