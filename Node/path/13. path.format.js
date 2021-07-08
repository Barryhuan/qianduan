// 解析路径对象
let path = require('path')

// path.format(pathObject)
/*
~  参数：pathObject <Object> 任何具有以下属性的 JavaScript 对象：
  *  dir <string>
  *  root <string>
  *  base <string>
  *  name <string>
  *  ext <string>
  @ 返回: <string>
*/

// path.format() 方法从对象返回路径字符串。 这与 path.parse() 相反
/*
  当向 pathObject 提供属性时，请记住存在一个属性优先于另一个属性的组合：
  如果提供 pathObject.dir，则忽略 pathObject.root
  如果 pathObject.base 存在，则忽略 pathObject.ext 和 pathObject.name
*/

path.format({
	root: '/',
	dir: '/foo/bar',
	base: 'file.txt',
})

// /foo/bar/file.txt

path.format({
	dir: '/foo/bar',
	ext: '.txt',
	name: 'file',
})

// /foo/bar/file.txt
