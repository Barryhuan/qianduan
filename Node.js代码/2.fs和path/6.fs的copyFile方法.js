const fs = require('fs')
fs.copyFile(__dirname+'/files/1.txt', __dirname + '/files/1-copy.txt', err => {
    if (err) return console.log('访问是失败！：' + err.message)
    console.log('复制成功！')
})