// 判断是否绝对路径
let path = require('path')

// path.isAbsolute(path)
// 参数：path <string>
// 返回: <boolean>

// path.isAbsolute() 方法会判定 path 是否为一个绝对路径

path.isAbsolute('/foo/bar/root') // true
path.isAbsolute('/baz/..') // true
path.isAbsolute('home') // false
path.isAbsolute('home/') // false
path.isAbsolute('.') // false
