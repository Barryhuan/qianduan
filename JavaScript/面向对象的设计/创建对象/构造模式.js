function Person (name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    this.run = function () {
        console.log(this.name)
    }
}
let a = new Person('老王', 20, '男')
console.log(a)
let b = new Person('老许', 21, '女')
console.log(b)

// 问题是每创造一个实例就会多创造一个function，每个function都不一样
console.log(a.run === b.run) // false