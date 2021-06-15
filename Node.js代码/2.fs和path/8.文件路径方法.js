const path = require('path')

console.log(path.join(__dirname,'/files/1.txt')) // 拼接文件路径的方法

console.log(path.sep) // 获取系统文件路径的分隔符

let url = 'c:/c/s/d/s/c/a/1.html'
console.log(path.basename(url)) // 获取文件路径，不包含文件
console.log(path.dirname(url)) // 获取路径文件名称
console.log(path.extname(url)) // 获取路径文件的后缀名