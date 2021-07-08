// 获取文件目录路径
let path = require('path')

// path.dirname(path)
// 参数：path <string>
// 返回: <string>

// path.dirname() 方法返回 path 的目录名，类似于 Unix dirname 命令。 尾随的目录分隔符被忽略

path.dirname('/foo/bar/root/index.html/') // /foo/bar/root
