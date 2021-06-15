// 类的静态方法
/*
  类的静态方法是通过给类的方法前加上static关键字
  静态方法不会被类的实例对象继承，只可以用过(类名.静态方法)调用
  类的静态方法可以被子类继承，也可以被子类通过super对象调用
*/

//~ 静态方法的定义
class A {
  static sayMmp() {
    console.log('妈卖批')
  }
}

A.sayMmp() // 妈卖批

// 静态方法只能被(类.静态方法)调用
let a = new A()
// a.sayMmp() // a.sayMmp is not a function

//~ 静态方法的this指的是类本身，而不是类的实例对象
class B {
  static sayMmp() {
    return this
  }
}

B.sayMmp() // [class B]

//~ 父类的静态方法，可以被子类继承
// 子类调用父类带有this的方法时，this指向的是子类
class C {
  static sayMmp() {
    return this
  }
}

class Cson extends C {}
let cson = Cson.sayMmp() // [class Cson extends C]
cson === Cson // true
cson.prototype.constructor === Cson.prototype.constructor // true
cson.prototype.constructor === C.prototype.constructor // false

//~ 子类通过super调用父类的静态方法
class D {
  static sayMmp() {
    return '妈卖批'
  }
}

class Dson extends D {
  static sayMmp() {
    return super.sayMmp() + '儿子在调用'
  }
}

Dson.sayMmp() // 妈卖批儿子在调用

// 子类重写父类的静态方法时，必须也是静态方法，否则就是直接调用父类的方法而不是重写了