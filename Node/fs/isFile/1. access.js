// 判断文件的是否存在，是否可读可写
let fs = require('fs')
// fs.access(path[, mode], callback)
/*
!  参数1：path <string> | <Buffer> | <URL>
?  参数2：mode <integer> 默认值: fs.constants.F_OK
!  参数3  callback <Function>
*    err <Error>
*/

// 文件是否存在
fs.access('./file.txt', err => {
	if (err) throw err
	console.log('文件存在') // 文件存在
})

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
