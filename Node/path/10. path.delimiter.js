// 提供特定于平台的路径定界符
let path = require('path')

// path.delimiter
// 返回：<string>

/*
  提供特定于平台的路径定界符：
  ; 用于 Windows
  : 用于 POSIX
*/

process.env.PATH // /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
process.env.PATH.split(path.delimiter) // [ '/usr/local/bin', '/usr/bin', '/bin', '/usr/sbin', '/sbin' ]
