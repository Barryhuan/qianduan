// 类的实例对象和构造函数的实例对象是相同的

//~ 类中的this指定的属性才会绑定在实例对象上，否者就在类的原型上

class A {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.sayAll = function () {
      console.log(this.x, this.y)
    }
  }
  toStringAll() {
    console.log(this.x, this.y)
  }
}

let a = new A(1, 2)
a.toStringAll() // 1 2

// 这些属性都是保存在类的实例对象上的
a.hasOwnProperty('x') // true
a.hasOwnProperty('y') // true
a.hasOwnProperty('sayAll') // true
a.hasOwnProperty('toStringAll') // false

a.__proto__.hasOwnProperty('toStringAll') // true：类内部定义的保存在类的原型上

//~ 类的实例对象共享同一个类的原型对象
A.prototype.sayMmp = () => console.log('妈卖批')

let a1 = new A(2, 3)
a1.sayMmp() // 妈卖批

let a2 = new A(3, 4)
a1.sayMmp() // 妈卖批