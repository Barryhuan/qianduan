// 类的继承
//~ 类的继承通过extends关键字实现

class A {}
class B extends A {}

//*

/*
  * 等同于
  class A {
    constructor() {}
  }

  class B extends A {
    constructor(...args) {
      super(...args)
    }
  }

*/

// 这样的继承相当于单纯的复制

//~ super关键字用于调用父类的构造函数,创建一个父类的实例对象，再由子类修改父类实例对象的this，这样父类的属性和方法都被子类的实例继承了
// super关键字必须子类的构造函数里，不然会报错

class A1 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class B1 extends A1 {
  constructor(x, y, z) {
    // 调用父类的构造方法并传入对应的初始化参数
    // 子类继承父类时，this操作必须在super关键字后面（子类的this会绑定在父类的实例上），不然会在创建子类实例时报错
    super(x, y)
    this.z = z
  }

  sayAll() {
    console.log(this.x, this.y, this.z)
  }
}

let b = new B1(1, 2, 3)
b.sayAll() // 1 2 3

// 判断子类的实例对象的继承关系
b instanceof A1 // true
b instanceof B1 // true






