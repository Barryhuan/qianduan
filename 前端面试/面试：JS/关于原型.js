// 原型的定义：在JavaScript代码中，每定义一个对象的时候，对象中包含着一些预定义的属性，每个函数对象都有prototype属性，这是属性指向函数的函数对象。
// 原型对象的作用是实现每个函数实例共享属性和方法

// 对于原型链的理解
// 原型链主要解决的是继承问题
// 每个对象都有原型对象，通过__proto__指针指向其原型对象，并从中继承属性和方法
// 同时，原型对象也可能有原型对象，这样一层层的，最终执行null，这种关系被称为原型链
// 通过原型链可以实现对象拥有定义在其他对象的属性和方法

// 面试题
// 1.实现经典继承

function SuperType() {
    this.name = '小明'
    this.age = 20
}

function SubType() {
    SuperType.call(this)
}

let a = new SubType()
console.log(a.name) // 小明
console.log(a.age) // 20

// 2、实现原型链继承
function Father() {
    this.name = '小王'
    this.age = 30
}

Father.prototype.sayName = function () {
    return this.name 
}

function Son() {
    this.sex = '男'
}

Son.prototype = new Father()

Son.prototype.saySex = function () {
    return this.sex
}

let a1 = new Son()

console.log(a1.name) // 小王
console.log(a1.age) // 30

// 3.实现组合继承
function SuperType1() {
    this.name = '老许'
    this.age = 40
}

SuperType1.prototype.sayName = function () {
    return this.name
}

function SubType1() {
    SuperType1.call(this)
}

SubType1.prototype = new SuperType1()

SubType1.prototype.sayAge = function () {
    return this.age
}

let q = new SubType1()
console.log(q.sayAge()) // 40
console.log(q.sayName()) // 老许

// 4.实现寄生组合模式继承
function Father1() {
    this.name = '老陈'
    this.age = 60
}

Father1.prototype.sayName = function () {
    return this.name
}

function Son1() {
    Father1.call(this)
}

function Item(fahter, son) {
    let o = Object.create(fahter.prototype)
    o.constructor = son
    son.prototype = o
}

Item(Father1, Son1)

Son1.prototype.sayAge = function () {
    return this.age
}

let t = new Son1()

console.log(t.name) // 老陈
console.log(t.sayName()) // 老陈
console.log(t.age) // 60
console.log(t.sayAge()) // 60