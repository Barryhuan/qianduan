// 将数据写入文件
// 如果文件不存在，则创建文件；如果文件存在，则覆盖文件内容
let fs = require('fs')

// fs.writeFile(file, data[, options], callback)
/*
!  参数1：file <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符
!  参数2：data <string> | <Buffer> | <TypedArray> | <DataView> | <Object>
?  参数3（可选）：options <Object> | <string>
*    encoding <string> | <null> 默认值: 'utf8'
*    mode <integer> 默认值: 0o666
*    flag <string>  默认值: 'w'。
*    signal <AbortSignal> 允许中止正在进行的写入文件
!  参数4：callback <Function>
*    err <Error> | <AggregateError>
@	 返回：undefined
*/

fs.writeFile('./write1.txt', '我被写入进去了', 'utf-8', err => {
	if (err) throw err
	console.log('数据写入进去了')
})
