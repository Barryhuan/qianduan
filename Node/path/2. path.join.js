//~ 拼接路径
let path = require('path')

// path.join([...paths])
// 参数：...paths <string> 路径片段的序列
// 返回: <string>
/*
  ''：表示在当前目录
  '.'：表示在当前目录
  '..'：表示上级目录
  单字母会自动拼接路径
*/

path.join('/a', '/b', '..') //~ /a
path.join('/a', '') //~ /a
path.join('/a', '/b', '.') //~ /a/b
path.join('/a', '.') //~ /a
path.join('/a', 'b', 'c') //~ /a/b/c
path.join('/a', 'b', '/c', '..') //~ /a/b
