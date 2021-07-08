// 解析路径
let path = require('path')

// path.parse(path)
// 参数：path <string>
// 返回: <Object>

/*
~ 返回的对象有以下属性
*  root <string> 根路径
*  dir <string> 目录路径
*  base <string> 文件全称
*  name <string> 文件名
*  ext <string> 文件后缀
 */

// path.parse() 方法返回一个对象，对象的属性表示 path 的元素。 尾部文件分隔符会被忽略

console.log(path.parse('/foo/bar/root/file.txt'))

/*
  {
    root: '/',
    dir: '/foo/bar/root',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
  }
  布局图：
  ┌─────────────────────┬────────────┐
  │          dir        │    base    │
  ├──────┬              ├──────┬─────┤
  │ root │              │ name │ ext │
  "  /    home/user/dir / file  .txt "
  └──────┴──────────────┴──────┴─────┘
*/
