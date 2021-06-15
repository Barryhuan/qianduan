function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    if (typeof this.sayName != 'function') {
        Person.prototype.sayName = function () {
            return this.name
        }
    }
} 

var a = new Person('老许', 20, '男')
console.log(a.sayName())