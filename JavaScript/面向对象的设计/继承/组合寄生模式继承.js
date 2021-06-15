function Father(){
    this.name = '老王'
    this.arr = [20, 20, 20, 20]
}

Father.prototype.sayName = function() {
    return this.name
}

function Son() {
    Father.call(this) 
}

function person(father, son) {
    let xx = Object.create(farther.prototype) // 也是同new fn()实现的，但是fn()里面什么都没有
    xx.consturctor = son
    son.prototype = xx
}
person(Father, Son)
let a = new Son()
console.log(a.name)
a.arr.push(10, 10, 10)
console.log(a.arr)

let b = new Son()
console.log(b)
b.arr.push(20, 20, 20)
console.log(b.arr)