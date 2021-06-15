// 类的实例对象属性定义

//~ 将类的实例对象属性定义在类的头部

class A {
  // 这些属性是保存在实例对象的，不保存在类的原型里
  a = 1
  b = 2
  c = 3
  add() {
    return this.a + this.b + this.c
  }
}

let a = new A()
a.add() // 6

a.hasOwnProperty('a') // true 实例对象里有这个属性
a.__proto__.hasOwnProperty('a') // false 原型上没有这个属性

