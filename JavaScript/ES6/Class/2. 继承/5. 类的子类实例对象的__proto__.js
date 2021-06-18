// 类的子类实例对象的__proto__

class A {}

class B extends A {}

let a = new A()
let b = new B()

b.__proto__ === a.__proto__ // false
B.__proto__.__proto__ === a.__proto__ // true

//~ 原理
Object.setPrototypeOf(B.prototype, A.prototype)

/*
  Object.setPrototypeOf(obj, proto) {
    obj.__proto__ = proto
    return obj
  }
*/

a.__proto__ === A.prototype // true
b.__proto__ === B.prototype // true

b.__proto__.__proto__ === a.__proto__ // true
// Object.setPrototypeOf(B.prototype, A.prototype)
// obj.__proto__ = proto
// B.prototype.__proto__ = A.prototype
// b.__proto__.__proto__ = a.__proto__