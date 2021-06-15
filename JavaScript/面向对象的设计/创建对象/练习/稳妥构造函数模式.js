function Person(name, age, sex) {
    var obj = new Object()
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    obj.sayName = function () {
        return this.name
    }
    return obj
}

var a = Person('老王', 20, '男')
console.log(a)
console.log(a.sayName())

// 无法使用this和new