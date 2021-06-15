function Father () {
    this.name = '老王'
    this.age = 20
    this.arr = [2, 3, 4, 5]
}
// Father.prototype.age = 33 // 在Father上设置age属性

Father.prototype.sayAge = function () {
    console.log(this) // Father { name: '老王', age: 20 }   Son的实例调用的是Father的属性
    return this.age
}

function Son() {
    Father.call(this) // 第二次调用Father的构造函数，因为在创建实例new Son的时候会调用Father构造函数，这里继承了father实例的所有属性，包括了name，age，arr，这里继承的属性屏蔽了原型上同名的属性
    // this.age = 23
}

Son.prototype = new Father() // 第一次调用Father的构造函数,son的原型继承了father实例的所有属性，包括name，age，arr

Son.prototype.sayName = function () {
    return this.name
}

let a = new Son() // 这里调用了Father构造函数
console.log(a.name) // 老王
console.log(a.age) // 20
console.log(a.sayAge()) // Father { name: '老王', age: 20, arr: [ 2, 3, 4, 5 ] } 20
console.log(a.arr) //  [ 2, 3, 4, 5 ]

let b = new Son() // 这里调用了Father构造函数
console.log(b.arr.push(3, 3, 3, 3, 3)) // 9
console.log(b.arr) // [ 2, 3, 4, 5, 3, 3, 3, 3, 3 ]

// 缺点：在Son实例化和调用father的时候多创造属性，而且会屏蔽原型中的属性