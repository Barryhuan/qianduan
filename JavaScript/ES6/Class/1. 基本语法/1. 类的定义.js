// js的类是ES5构造函数的语法糖，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已

//~ 构造函数
function Person(x, y) {
  this.x = x
  this.y = y
}

Person.prototype.sayString = function() {
  console.log(this.x, this.y)
}

let p = new Person(1, 2)
p.sayString() // 1 2

//~ 类Class
class Person1 {
  // 类的构造函数
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  // 类的方法都是定义在原型上的
  sayString() {
    console.log(this.x, this.y)
  }
}

let p1 = new Person1(1, 2)
p1.sayString() // 1 2

//? --------------------------------------------------------------------

//~ JS的类本质上是一个构造函数
typeof Person1 // function
Person1 === Person1.prototype.constructor // true

//~ 定义在类中的方法都是定义在类的prototype属性上的（即原型）
class A {
  constructor() {
    // ...
  }

  toString() {
    // ...
  }

  toValue() {
    // ...
  }
}

// 等同于

A.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
}

//? --------------------------------------------------------------------

//~ 如何给类一次性添加多个方法
class B {}

Object.assign(B.prototype, {
  sayA() {
    console.log('A')
  },
  sayB() {
    console.log('B')
  }
})

let b = new B()
b.sayA() // A
b.sayB() // B

//~ 类和构造函数的区别
//* 构造函数原型上的方法都是可枚举的
//* 类内部定义的属性和方法都是不可枚举的
// 拿顶部的构造函数来展示

//? 构造函数
Object.keys(Person.prototype) // [ 'sayString' ]

//? 类
console.log(Object.keys(Person1.prototype))  // []