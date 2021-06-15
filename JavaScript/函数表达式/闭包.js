// 闭包的缺陷，调用外部函数的活动对象的最后一个值
// 在调用data[0]的时候，全局上下文的变量对象的i值已经为3了
var data = []
for (var i = 0; i < 3; i++) {
	data[i] = function () {
		console.log(i)
	}
}
data[0]()
data[1]()
data[2]()

// 解决
// 在调用arr[0]的时候，当前函数没有i的值，往上查找到匿名函数的时候的执行上下文的活动对象时，i的值为0
function creatFunction() {
	var arr = new Array()
	for (var i = 0; i < 10; i++) {
		arr[i] = (function (num) {
			return function () {
				return num
			}
		})(i)
	}
	return arr[0]
}

console.log(creatFunction())

let a = (function () { console.log('15') }())
