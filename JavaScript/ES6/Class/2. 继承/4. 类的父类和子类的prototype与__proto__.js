// 类的父类和子类的prototype关系
/*
  类的继承链有2条：
  * 1. 子类的__proto__属性(构造函数的继承)，总是指向父类
  * 2. 子类prototype属性的__proto__属性(表示方法的继承)，总是指向父类的prototype属性
*/

class A {}

class B extends A {}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true

// 子类B的__proto__属性指向父类A，子类B的prototype属性的__proto__属性指向父类A的prototype属性

//~ 类继承的原理
/*
  设置原型的方法
  Object.setPrototypeOf(obj, proto) {
    obj.__proto__ = proto
    return obj
  }
*/

class A1 {}

class B1 {}

// B 继承 A 的静态属性 <=> B.__proto__ === A
// 作为一个对象，子类（B）的原型（__proto__属性）是父类（A）
Object.setPrototypeOf(B1, A1)

// B 的实例继承 A 的实例 <=> B.prototype.__proto__ === A.prototype
// 作为一个构造函数，子类（B）的原型对象（prototype属性）是父类的原型对象（prototype属性）的实例
Object.setPrototypeOf(B1.prototype, A1.prototype)

//~ extends后面可以跟多种类型的值
class A2 {}
class B2 extends A2 {}
// 上面代码的A2，只要是一个有prototype属性的函数，就能被B继承
// 由于函数都有prototype属性（除了Function.prototype函数），因此A可以是任意函数

//~ 继承分两种情况：
//? 1.子类继承Object类
class A3 extends Object {}

A3.__proto__ === Object // true
A3.prototype.__proto__ === Object.prototype // true

// A其实就是构造函数Object的复制，A的实例就是Object的实例

//? 不存在任何继承
class A4 {}

A4.__proto__ === Function.prototype // true
A4.prototype.__proto__ === Object.prototype // true

// A作为一个基类（即不存在任何继承），就是一个普通函数，所以直接继承Function.prototype
// 但是，A调用后返回一个空对象（即Object实例），所以A.prototype.__proto__指向构造函数（Object）的prototype属性