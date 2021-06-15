// 判断实例是否为构造函数的实例
function Person(){}
let a = new Person()
console.log(a.constructor == Person) // 结果为true



let b = {
    name : '老王'
}
// 判断这个属性是否为对象的属性
console.log(b.hasOwnProperty('name')) // 结果为true

// 判断这个属性是否能通过for-in来枚举
console.log(b.propertyIsEnumerable('name')) // 结果为true

// 判断这个实例对象是否是原型的实例
console.log(Person.prototype.isPrototypeOf(a)) // 结果为true
