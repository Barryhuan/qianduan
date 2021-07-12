// 读取文件
let fs = require('fs')

//~ 异步
//? fs.readFile(path[, options], callback)
/*
!  参数：path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符
!  可选参数：options <Object> | <string>
*    encoding <string> | <null> 默认值: null
*    flag <string> 默认值: 'r'。
*    signal <AbortSignal> 允许中止正在进行的读取文件
!  参数：callback <Function>
*    err <Error> | <AggregateError>
*    data <string> | <Buffer>
*/

fs.readFile('./read.txt', 'utf-8', (err, data) => {
	if (err) throw err
	console.log(data) // 我的读取到了
})
