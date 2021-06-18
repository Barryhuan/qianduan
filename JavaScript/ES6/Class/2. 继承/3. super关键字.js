// super关键字
/*
  super函数都必须在子类的构造函数中调用
  supper关键字有2中表示:
    * super作为函数调用，代表父类的构造函数，ES6规定子类的构造函数必须执行一次super函数
    * super作为对象使用
      ~ super作为对象时，调用父类的普通方法时，指向的是父类的原型对象的方法（相当于：super === 父类.prototype），定义在父类实例上的属性和方法是无法调用的
      ~ super作为对象时，调用父类的静态方法是，指向的是父类本身（相当于：super === 父类）
*/

//~ super作为函数时
class A {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class B extends A {
  constructor(x, y, z) {
    super(x, y)
    this.z = z
    // super虽然代表着是父类的构造函数，但返回的是子类的实例，super内部的this指向的是子类的实例
    // super() === A.prototype.constructor.call(this)
  }

  sayAll() {
    return this.x, this.y, this.z
  }
}

let b = new B(1, 2, 3)
b.sayAll() // 1 2 3

//~ super作为对象时
//? 1. 普通方法
class A1 {
  p() {
    return 2
  }
}

class B1 extends A1 {
  constructor() {
    super()
    console.log(super.p())
  }
}

let b1 = new B1() // 2
// super作为对象且是父类的普通方法时，调用的是父类原型上的方法

//@ 父类的普通方法中如果有调用this，那么在子类中通过super方法调用时，this指向的是子类的实例
class A2 {
  constructor() {
    this.x = 2
  }
  p() {
    console.log(this.x)
  }
}

class B2 extends A2 {
  constructor() {
    super()
    this.x = 4
    super.p()
    // 原理：A.prototype.P.call(this)
  }
}

let b2 = new B2() // 4

// ------------------------------------------------------------------------------------------

class A3 {
  constructor() {
    this.x = 3
  }
}

class B3 extends A3 {
  constructor() {
    super()
    this.x = 5
    super.x = 7 // 设置：super.x = 7 === this.x = 7
    console.log(super.x) // 读取：super.x = A.prototype.x
    console.log(this.x)
  }
}

let b3 = new B3() // undefined 7

//? 2. 静态方法
class A4 {
  static myMethod(msg) {
    console.log('静态：' + msg)
  }
  myMethod(msg) {
    console.log('普通：' + msg)
  }
}

class B4 extends A4 {
  static myMethod(msg) {
    super.myMethod(msg)
  }

  myMethod(msg) {
    super.myMethod(msg)
  }
}

B4.myMethod(1) // 静态：1

let b4 = new B4()
b4.myMethod(2) // 普通：2

// super在静态方法之中指向父类

//@ 父类的静态方法中如果有调用this，那么在子类中通过super方法调用时，this指向的是子类本身，而不是子类的实例对象

class A5 {
  constructor() {
    this.x = 5
  }
  static myMethod() {
    console.log(this.x)
  }
}

class B5 extends A5 {
  constructor() {
    super()
    this.x = 9
  }
  static myMethod() {
    super.myMethod()
  }
}

B5.myMethod() // undefined

B5.x = 11
B5.myMethod() // 11