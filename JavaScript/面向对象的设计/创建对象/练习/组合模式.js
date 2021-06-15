function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex =sex;
    this.color = [10, 20, 30, 50]
}

Person.prototype.sayName = function () {
    return this.name
}

var a = new Person('老王', 20, '男')
a.color.push(6, 6, 6, 6)
console.log(a)
console.log(a.sayName())
console.log(a.color)
var b = new Person('老许', 30, '女')
b.color.push(7, 7, 7, 7)
console.log(b)
console.log(b.sayName())
console.log(b.color)
// 优点：解决了构造函数和原型的缺点
// 兼顾了传递参数和引用类型的值