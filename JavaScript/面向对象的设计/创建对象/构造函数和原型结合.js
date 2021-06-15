function Person (name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    this.friends = [10, 20, 30, 40]
}

Person.prototype = {
    consturctor : Person,
    run : function () {
        console.log(this.name)
    }
}

let a = new Person('老许', 20, '男')
let b = new Person('老王', 21, '女')

a.friends.push(50)
console.log(a.friends) // [ 10, 20, 30, 40, 50 ]
console.log(b.friends) // [ 10, 20, 30, 40 ]
// 实现了分离，引用类型的值不用共享了
