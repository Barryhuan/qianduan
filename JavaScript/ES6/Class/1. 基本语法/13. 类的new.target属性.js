// new.target属性
//* new.target返回new命令作用于的那个构造函数，即返回使用new命令的构造函数
//* 如果构造函数不是通过 new 命令或 Reflect.construct() 调用的，new.target会返回undefined

//~ 构造函数使用new.target
function Person(name) {
  if (new.target !== undefined) {
    this.name = name
  } else {
    throw new Error('必须使用new命令生成实例！')
  }
}

let p1 = new Person('123')
p1.name // 123

let p2 = Person.call(p1, '456') // Error: 必须使用new命令生成实例！

//~ 类使用new.target，返回的是当前的类

class A {
  constructor(length, width) {
    console.log(new.target === A)
    this.length = length
    this.width = width
  }
}

let a = new A(1, 2) // true

//~ 子类继承父类时，new.target会返回子类

class B {
  constructor() {
    console.log(new.target)
    console.log(new.target === B)

  }
}

class C extends B {
  constructor() {
    super()
  }
}

let c = new C() // [class C extends B]  false

//~ 利用这个特点，可以写出不能独立使用、必须继承后才能使用的类
class D {
  constructor() {
    if (new.target === D) {
      throw new Error('D类不能实例化！')
    }
  }
}

class E extends D {
  constructor() {
    super()
  }
}

let d = new D() // D类不能实例化！
let e = new E() // 子类可以成功创建实例对象
