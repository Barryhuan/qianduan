// 类的注意点

//~ 1. 类内部是采用严格模式的

//~ 2. 类内部不存在变量提升

//~ 3. 类有一个name属性，输出class 后面的类名
class A {}
A.name // A

//~ 4. 类内部给方法添加个*，就表示该方法是一个 Generator 函数
class Foo {
  constructor(...args) {
    this.args = args;
  }
  * [Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg;
    }
  }
}

for (let x of new Foo('hello', 'world')) {
  console.log(x); // hello world
}

//~ 5. 类内部的this指向
// 类的方法内部如果含有this，它默认指向类的实例
// 如果将方法提取出来单独使用，this会指向该方法运行时所在的环境（由于class内部是严格模式，所以this实际指向的是undefined）

class Logger {
  // 解决方法
  constructor() {
    this.printName = this.printName.bind(this)
  }
  printName(name = 'there') {
    this.print(`Hello ${name}`)
  }

  print(text) {
    console.log(text)
  }
}

const logger = new Logger()
const { printName } = logger
printName() // TypeError: Cannot read property 'print' of undefined



