function a() {
	for (var i = 0; i < 10; i++) {
		// console.log(i)
	}

	return i
}
console.log(a())

// (function () {})()模仿块级作用域的好处就是块级作用域的作用，执行完后销毁
