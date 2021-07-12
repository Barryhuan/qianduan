// 通过流的方式读取
let fs = require('fs')

//? fs.createReadStream(path[, options])
/*
!  参数：path <string> | <Buffer> | <URL>
!  可选参数：options <string> | <Object>
*    flags <string> 默认值: 'r'    文件读取操作
*    encoding <string> 默认值: null   编码
*    fd <integer> | <FileHandle> 默认值: null   文件描述符，默认为null
*    mode <integer> 默认值: 0o666  文件权限
*    autoClose <boolean> 默认值: true  是否自动关闭读取
*    emitClose <boolean> 默认值: true
*    start <integer>  开始读取区间
*    end <integer> 默认值: Infinity 结束读取区间
*    highWaterMark <integer> 默认值: 64 * 1024  文件一次读多少字节,默认 64*1024 即64KB 最高水准线
*    fs <Object> | <null> 默认值: null
@  返回: <fs.ReadStream> 返回一个可读流
*/

let res = fs.createReadStream('./read.txt', {
	encoding: 'utf-8',
})

res
	.on('open', () => {
		//! 默认创建一个可读流，是非流动模式，默认不会读取数据，它什么也不做，就在这等着
		console.log('打开文件')
	})
	.on('data', data => {
		//! 监听了data事件的话，就可以将非流动模式转换为流动模式
		//! 流动模式会疯狂的触发data事件，直到读取完毕
		console.log('读取数据：' + data)
	})
	.on('error', err => {
		console.log('读取失败：' + err)
	})
	.on('end', () => {
		console.log('读取结束')
	})
	.on('close', () => {
		console.log('关闭文件')
	})

/*
  ~ 还有2个方法
    * pause()：暂停读取，会暂停data事件的触发，将流动模式转变非流动模式
    * resume()：恢复读取，恢复data事件的触发，将非流动模式转变流动模式
*/
