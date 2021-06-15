function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    if (typeof this.sayName != 'function') {
        Person.prototype.sayName = function () {
            console.log(this.name)
        }
    }
}

let a = new Person('老王', 20, '男')
a.sayName() 

// 当以一个属性的存在是否存在作为是否要初始化原型