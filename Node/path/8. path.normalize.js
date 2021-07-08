// 规范化路径
let path = require('path')

// path.normalize(path)
// path <string>
// 返回: <string>

// path.normalize() 方法会规范化给定的 path，并解析 '..' 和 '.' 片段
// 当发现多个连续的路径分隔符时,它们会被单个的路径分隔符替换，末尾的多个分隔符会被保留
// 如果 path 是一个长度为零的字符串，则返回 '.'，表示当前工作目录

console.log(path.normalize('/foo//bar//root/..//')) // /foo/bar/
console.log(path.normalize('')) // .
