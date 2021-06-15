// 类也有属于它自己的表达式

//~ 形式1
//* A表示类自身的引用，只能在类的内部使用
let A1 = class A {
  getClassName() {
    console.log(A.name)
  }
}

let a = new A1()
a.getClassName() // A

//~ 形式2
//* 如果没有使用到类自身的引用的话，可以省略
let A2 = class {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  sayAll() {
    console.log(this.x, this.y)
  }
}

let a2 = new A2(1, 2)
a2.sayAll() // 1 2

//~ 形式3
//* 立即执行的类

let A3 = new class {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  sayAll() {
    console.log(this.x, this.y)
  }
}(1, 2)

A3.sayAll() // 1 2