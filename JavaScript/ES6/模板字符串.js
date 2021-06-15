// 主要用于字符串的拼接
// ``相当于''，但是可以换行
// ${变量}, 相当于在字符串中 '' + obj.name + ''

var obj = {
    username : '老王',
    age: 20
}
// 传统拼接字符串
var str = '你好，我叫' + obj.username + '，今年' + obj.age + '岁'
console.log(str)
// 你好，我叫老王，今年20岁

// 模板字符串拼接
var strr = `你好，我叫${obj.username}，今年${obj.age}岁`
console.log(strr)
// 你好，我叫老王，今年20岁