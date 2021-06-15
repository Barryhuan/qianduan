var module1 = require('./modules/module1')
var module2 = require('./modules/module2')
var module3 = require('./modules/module3')
var uniq = require('uniq')

console.log(module1)
console.log(module2())
console.log(module3)

// 引入第三方库
var arr = [1, 1, 2, 2, 5, 6]
var d = uniq(arr)
console.log(d)