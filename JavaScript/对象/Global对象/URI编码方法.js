let a = 'http://www.baidu.com/illager value.html#Strat'
// 将URI编码
// 1.将URI的空格转% 中文将被转码
console.log(encodeURI(a)) // http://www.baidu.com/illager%20value.html#Strat
// 2.将其他的特殊字符转化成其他的格式
console.log(encodeURIComponent(a))// http%3A%2F%2Fwww.baidu.com%2Fillager%20value.html%23Strat

// 转换
console.log(decodeURI(encodeURI(a))) // http://www.baidu.com/illager value.html#Strat 转化为正常
console.log(decodeURIComponent(encodeURIComponent(a))) // http://www.baidu.com/illager value.html#Strat