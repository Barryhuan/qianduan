// 类的Constructor
//~ 类创建实例对象时调用的是一个默认的构造函数，返回值实例对象(即this)

// 定义一个类
class A {}
let a = new A()

// 实际运行时
class A1 {
  constructor() {
    return this
  }
}

let a1 = new A1()

//~ 类创建实例时必须要使用new关键字，不然会报错，构造函数可以不用（）

function Person1(x, y) {
  this.x = x
  this.y = y
}

let p1 = Person1(1, 2) // 即默认调用一个函数，而不是构造函数，主要是不会报错

class Person2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

let p2 = Person2() // 不使用new关键字，会报错：Class constructor Person2 cannot be invoked without 'new'

