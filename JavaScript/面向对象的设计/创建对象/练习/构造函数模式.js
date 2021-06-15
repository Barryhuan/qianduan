function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var a = new Person('老许', 20, '男')
var b = new Person('老王', 50, '女')
console.log(a)
console.log(b)

// new的过程
// 1.创建一个新对象
// var obj = new Object()
// 2.将this指向obj
// Person.call(obj, '老许', 20, '男')
// 3.实例的原型指向Person的原型
// obj.__proto__ = Person.prototype
// 4.返回对象
// return obj

// 优点：可以指定类型的值
// 缺点：每创建一个实例就要多创建一个方法，复用率低