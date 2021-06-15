// 形参默认值可以当做函数的默认值
function Person(x, y) {
    this.x = x;
    this.y = y;
}

var a = new Person()
console.log(a)
// Person { x: undefined, y: undefined }
// 要是不传入任何参数的话都是空的，有时候需要些默认值

function Person1(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

var b = new Person1()
console.log(b)
// Person1 { x: 0, y: 0 }

// 向里面传递参数也不会有什么影响
var c = new Person1(5, 6)
console.log(c)
// Person1 { x: 5, y: 6 }