// 获取路径文件名

let path = require('path')

// path.basename(path[, ext])
/*
  path <string>
  ext <string> 可选的文件扩展名
  返回：<string>
*/

// path.basename() 方法返回 path 的最后一部分，类似于 Unix basename 命令。 尾随的目录分隔符被忽略

console.log(path.basename('/foo/bar/root/index.html')) // index.html
console.log(path.basename('/foo/bar/root/index.html', '.html')) // index
console.log(path.basename('/foo/bar/root/index.html/', '.html')) // index
console.log(path.basename('/foo/bar/root/index.html', '.HTML')) // index.html
