// 类的静态属性

//~ 类的静态属性和静态方法一样，在属性前添加static关键字
//? 类的实例对象调用
class A {
  static a = 1
  static b = 2
  static c = 3
  add() {
    return A.a + A.b + A.c
  }
}

let a = new A()
a.add() // 6

//? 类调用
class B {
  static a = 1
  static b = 2
  static c = 3
  static add() {
    return B.a + B.b + B.c
  }
}

B.add() // 6