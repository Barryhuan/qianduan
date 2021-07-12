// 将数据同步写入到文件中
let fs = require('fs')

// fs.writeFileSync(file, data[, options])
/*
!  参数1：file <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符
!  参数2：data <string> | <Buffer> | <TypedArray> | <DataView> | <Object>
?  参数3（可选）：options <Object> | <string>
*    encoding <string> | <null> 默认值: 'utf8'
*    mode <integer> 默认值: 0o666
*    flag <string>  默认值: 'w'。
*    signal <AbortSignal> 允许中止正在进行的写入文件
@	 返回：undefined
*/

try {
	fs.writeFileSync('./write2.txt', '我被写入进去了', 'utf-8')
	console.log('文件写入进去了')
} catch (err) {
	throw err
}
