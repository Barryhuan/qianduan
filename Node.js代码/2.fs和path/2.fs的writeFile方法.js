const fs = require('fs');

fs.writeFile('./files/3.txt','傻逼东西', err => {
        if (err) {
            return console.log('文件写入错误！：' + err.message)
        }
        console.log('文件写入成功！')
    }
);