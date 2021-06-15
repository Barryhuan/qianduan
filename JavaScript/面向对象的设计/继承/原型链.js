function Father() {
	this.property = true
}

Father.prototype.sayFater = function () {
	return this.property
}

function Son() {
	this.sonperopert = false
}

Son.prototype = new Father()

Son.prototype.saySon = function () {
	return this.sonperopert
}

let a = new Son()
console.log(a.sayFater())

// 优点：实现了属性和方法的继承
// 缺点:1.无法向Son.prototype = new Father()中的Father构造函数传递参数
//      2.使用引用类型的值时会共享

// 引用类型的值

function Father1() {
	this.arr = [20, 30, 40, 50]
}

function Son1() {}

Son1.prototype = new Father1()

let a1 = new Son1()
a1.arr.push(10, 20, 30)
console.log(a1.arr)

let b1 = new Son1()
b1.arr.push(30, 40, 50)
console.log(b1.arr)
