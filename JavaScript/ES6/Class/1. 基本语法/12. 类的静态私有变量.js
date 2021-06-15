// 类的静态私有变量
// 只有类才能调用获取的变量

class A {
  static a = 22 / 7
  static #a = 3

  static #sayA() {
    return this.#a
    // 或者 return A.#a
  }

  static publicSay() {
    return this.#sayA()
    // 或者 return this.#sayA()
  }
}

A.a // 3.142857142857143
A.publicSay() // 3

A.#a // 报错
A.#sayA() // 报错