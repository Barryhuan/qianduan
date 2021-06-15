const fs = require('fs')
fs.appendFile('./files/1.txt','\n你好', err => {
    if (err) {
        return console.log('追加文件内容失败！' + err.message)
    }
    console.log('追加内容成功');
});