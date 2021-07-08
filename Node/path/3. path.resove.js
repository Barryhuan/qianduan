//~ 拼接成绝对路径
let path = require('path')

//~ path.resolve([...paths])
//* 参数：...paths <string> 一个路径或路径片段的序列
//? 返回: <string>

//@ path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径
//@ 给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径

// 遇见有/的序列的将作为根路径

// 1
path.resolve('/foo', '/bar', 'bat') // /bar/bat
path.resolve('/foo', '/bar', '/bat') // /bat
path.resolve('/foo', '/bar', '') // /bar
path.resolve('/foo', '/bar', '.') // /bar
path.resolve('/foo', '/bar/bat', '../') // bar

// 2
path.resolve('home', '/foo', 'bar') // /foo/bar
path.resolve('home', './foo', 'bar') // /Users/barry/Desktop/前端/练习/Node/path/home/foo/bar
path.resolve('home', 'foo', 'bar') // /Users/barry/Desktop/前端/练习/Node/path/home/foo/bar
