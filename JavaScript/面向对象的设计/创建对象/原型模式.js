// function Person () {}

// Person.prototype.name1 = '老王'
// Person.prototype.age = 20
// Person.prototype.sex = '男'
// Person.prototype.run = function () {
//     console.log(this.name1)
// }
// // 为属性设置单独的属性，但不共享
// Person.prototype.setName = function (name) {
//     this.name1 = name
// }

// let a = new Person()
// console.log(a.name1)
// console.log(a.age)
// console.log(a.sex)
// console.log(a.run())
// a.setName('老许')
// 判断Person里有没有name1这个属性
// console.log(Person.hasOwnProperty('name1')) // 结果为false
// console.log(a.name1)

// let b = new Person()
// console.log(b.name1)

// 构造函数的原型中的属性属于原型而不属于构造函数自身
// 原型中的this指向的是调用原型属性的实例
// 为实例设置单独属于自己的属性

// -----------------------------------------------------------------------------------------------------------------------------
// 屏蔽原型中的属性值
// function Person1 () {}

// Person1.prototype.name = '老海'
// Person1.prototype.age = 20
// Person1.prototype.sex = '女'
// Person1.prototype.run = function () {
//     console.log(this.name)
// }

// let a1 = new Person1()
// 屏蔽原型上的属性
// a1.name = '老潘'
// 解除屏蔽
// delete a1.name

// console.log(a1.name)

// 判断属性是否在实例上还是在原型上
// console.log(a1.hasOwnProperty('name')) //当屏蔽原型时为true，解除屏蔽为false

// 获取原型对象属性的描述符
// console.log(Object.getOwnPropertyDescriptor(Person1.prototype, 'name'))
// {
//   value: '老海',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// 判断实例和原型是否存在关系
// console.log(Object.getPrototypeOf(a1) === Person1.prototype) // 结果为true
// console.log(Object.getPrototypeOf(a1).name) // 老海
// 和Object的getPrototypeOf判断实例对象是否和构造函数的原型有关系一样
// console.log(Person1.prototype.isPrototypeOf(a1))

// 输出可以枚举的属性
// let keys = Object.keys(Person1.prototype)
// console.log(keys)
// 结果：[ 'name', 'age', 'sex', 'run' ]

// 输出所有原型属性
// let propertyName = Object.getOwnPropertyNames(Person1.prototype)
// console.log(propertyName)
// 结果：[ 'constructor', 'name', 'age', 'sex', 'run' ]

//-------------------------------------------------------------------------------------------------------------------------------
// 原型的this的一例
// function Person2 (name) {
//     this.name = name
//     this.run = function () {
//         return this.name
//     }
// }

// Person2.prototype.name = '老许'

// let a2 = new Person2('老王')
// console.log(a2.run())


// ------------------------------------------------------------------------------------------------------------------------------
// 原型字面量覆盖初始原型
// function Person3 (name) {
    // this.name = name
// }
// let a4 = new Person3()
// console.log(a4.constructor == Person3) // 当实例a4在字面量还未定义的时定义实例，a4的[[prototype]]始终指向初始原型 // 结果为ture
// console.log(Person3.prototype.isPrototypeOf(a4)) // 跟上面的一样，a4指向初始原型 // 结果为true
// Person3.prototype = {
//     constructor : Person3,
//     name : '老许',
//     age : 30,
//     sex : '男',
//     run : function () {
//        console.log(this.name)
//     }
// }

// // instanceof有问题
// // console.log(a4 instanceof Person3) // false
// let aq = new Person3('老王')
// console.log(aq.constructor == Person3) // 结果为false，在新原型对象没有指定构造函数时和在新原型对象下结果会是这样
// console.log(Person3.prototype.isPrototypeOf(aq)) // 结果为true，因为aq是重新赋值后连接的实例
// console.log(aq.name) // 当aq在之前定义会报undefined，当aq在之后定义则可以读取原型字面量的属性
 // false aq没有连接原型对象字面量的指针（aq不是原型）


 // -----------------------------------------------------------------------------------------------------------------------------
// function Person5 () {}

// Person5.prototype = {
//     constructor : Person5,
//     name : '老王',
//     age : 20,
//     sex : '男',
//     run : function () {
//         console.log(this.name)
//     },
//     friends : [10, 20, 30, 40]
// }

// let a5 = new Person5()
// let b5 = new Person5()

// a5.friends.push(50)
// console.log(a5.friends)
// console.log(b5.friends)

// 问题：原型模式最大的问题就于分享，基本值可以，引用类型的值（如Array，Object对象）,同样也可以共享，但是就是有时不喜欢共享，希望实例有不同的值
// 解决，下一章的是结合构造函数和原型的结合