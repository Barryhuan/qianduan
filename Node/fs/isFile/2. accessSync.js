// 判断文件的是否存在，是否可读可写
let fs = require('fs')
// fs.access(path[, mode])
/*
!  参数1：path <string> | <Buffer> | <URL>
?  参数2：mode <integer> 默认值: fs.constants.F_OK
*/

// 文件是否存在
fs.access('./file.txt')

// 文件是否可读
fs.access('./file.txt', fs.constants.R_OK, err => {
	if (err) throw err
	console.log('文件可读') // 文件可读
})

// 文件是否可写
fs.access('./file.txt', fs.constants.W_OK, err => {
	if (err) throw err
	console.log('文件可写') // 文件可写
})
