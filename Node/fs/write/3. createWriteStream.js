// 通过流的形式写入文件中
let fs = require('fs')

// fs.createWriteStream(path[, options])
/*
!  参数1：path <string> | <Buffer> | <URL>
?  参数2：options <string> | <Object>
*    flags <string>  默认值: 'w'.
*    encoding <string> 默认值: 'utf8'
*    fd <integer> | <FileHandle> 默认值: null
*    mode <integer> 默认值: 0o666
*    autoClose <boolean> 默认值: true
*    emitClose <boolean> 默认值: true
*    start <integer>
*    fs <Object> | <null> 默认值: null
@  返回：<fs.WriteStream> 可写流
*/

let writeStream = fs.createWriteStream('./write3.txt', 'utf-8')
writeStream.on('close', () => {
	console.log('已关闭')
})

for (let i = 0; i < 10000; i++) {
	writeStream.write('hello world')
}
writeStream.end()
