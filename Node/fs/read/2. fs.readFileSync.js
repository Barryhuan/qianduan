// 读取文件
let fs = require('fs')

//~ 同步
//? fs.readFileSync(path[, options])
/*
!  参数：path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符
!  可选参数：options <Object> | <string>
*   encoding <string> | <null> 默认值: null
*   flag <string> 默认值: 'r'。
@  返回：返回: <string> | <Buffer>
*/

fs.readFileSync('./read.txt', 'utf-8') // 我的读取到了
