// this的指向分为默认绑定，显示绑定，隐示绑定，new关键字绑定
// this的定义：this是指包含它的函数被作为方法调用时所属的对象

// 默认绑定
// 一般this是直接绑定在Window全局对象的，在严格模式下是绑定在undefined上

function a() {
    console.log(this)
}
// a() // Object [global]，也就是全局对象

// 显示绑定
// 如果使用函数的apply，call，bind，那么this绑定的就是他们所指定的对象
// apply和call是立即绑定执行的，bind是绑定到另一个函数上，在调用的

var obj = {
    a1: '我丢'
}
function b() {
    console.log(this)
}

var c = b.bind(obj) 
c() // { a1: '我丢' }

// 隐示绑定
// 函数是否在某个上下文对象中调用，如果是，那么this会指向调用的上下文对象

var obj1 = {
    c: function () {
        console.log(this === obj1) 
    } 
}

obj1['c']() // true

// new关键字绑定
// new关键字就是创建一个属于构造函数的实例对象
// new的过程

function new_word(fn) {
    // 创建一个字面量的空对象
    let target = {}

    // 判断传入的是否为函数，因为函数都有原型
    if (fn.prototype !== null) {
        // 将空对象的原型跟函数的原型绑定
        target.__proto__ = fn.prototype
    }
    // 声明一个变量存储函数的返回值，并将函数的this绑定到实例上
    let ret = fn.apply(target,Array.prototype.slice.call(arguments,1));
    // 判断函数的返回值是否为其他的对象或空对象
    if (ret && typeof ret === 'object' || typeof ret === 'function' && ret !== null) {
        return ret
    }
    // 返回创建好的实例
    return target
}

function Person(name, age) {
    this.name = name
    this.age = age
}

let item1 = new_word(Person, '老王', 20)
let item2 = new_word(Person, '老许', 30)
console.log(item1)


function new_key(per) {
    let o = {}
    if (per.prototype !== null) {
        o.__proto__ = per.prototype
    }
    let res = per.apply(o, Array.prototype.slice.call(arguments, 1))

    if (res && typeof res === 'object' || typeof res === 'function' && res !== null) {
        return res
    }
    return o
}

function SuperType(name, age) {
    this.name = name
    this.age = age
}

let aa = new_key(SuperType, '老王', 20)
let bb = new_key(SuperType, '老翔', 21)

console.log(aa)
console.log(bb)