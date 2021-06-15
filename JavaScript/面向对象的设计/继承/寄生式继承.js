let Person = {
    name : '老王',
    age : 20
}

function object(obj) {
    function fn() {}
    fn.prototype = obj
    return new fn()
}

function mmp() {
    let d = object(Person)
    d.sayName = function () {
        return '操你妈'
    }
    return d
}

let a = mmp()
console.log(a.name)
console.log(a.age)
console.log(a.sayName())

// 缺点：每创建一个实例就要多创建一个函数,而且引用类型会分享