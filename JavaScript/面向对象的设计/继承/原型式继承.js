let Person = {
    name : '老王',
    age : [10, 20, 30, 40, 50]
}

function object(obj) {
    function fn() {}
    fn.prototype = obj
    return new fn()
}

let a = object(Person)
a.name = '老许'
a.age.push(60)
console.log(a.name)
console.log(a.age)
console.log(a)
let b = object(Person)
b.name = '操'
b.age.push(70)
console.log(b)
console.log(b.name)
console.log(b.age)
// 缺点：还是引用类型值的问题

console.log(Person)

