// Object.getPropertyOf()判断父类和子类的继承关系

class A {}
class B extends A {}

Object.getPrototypeOf(B) === A // true

//~ 使用这个方法判断，一个类是否继承了另一个类