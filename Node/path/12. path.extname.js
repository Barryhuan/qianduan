// 获取路径文件扩展名
let path = require('path')

// path.extname(path)
// 参数：path <string>
// 返回: <string>

// path.extname() 方法返回 path 的扩展名，即 path 的最后一部分中从最后一次出现的 .（句点）字符到字符串的结尾
path.extname('/foo/bar/root/index.html') // .html
path.extname('index.html.md') // .md
path.extname('index.') // .
path.extname('index') // ''
path.extname('.index') // ''
path.extname('.index.md') // .md
