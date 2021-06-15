// 类的属性名可以用表达式来表示

let methodName = 'sayAll'

class Person {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  [methodName]() {
    console.log(this.x, this.y)
  }
}

let p = new Person(1, 2)
p.sayAll() // 1 2