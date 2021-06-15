// 类的私有属性和私有方法

//~ 定义类的私有属性
// 在变量前加上#，就可以定义一个类的私有变量了
// 私有变量必须在公开的方法上才能操作，单独调用会报错
// 父类的私有属性可以被子类继承
class A {
  #a = 123
  changePrivate(value) {
    return this.#a = value // 设置私有变量
  }
}

let a = new A()
a.changePrivate(12) // 12

//~ 定义类的私有方法
// 在方法上加上#，就可以定义一个类的私有方法了
class B {
  #a = 345
  #sayA() {
    return this.#a
  }
  sayAll () {
    console.log(this.#sayA())
  }
}

let b = new B()
b.sayAll() // 345