// const fs = require('fs');
// fs.stat(__dirname + '/files/1.txt', (err,stat) => {
//     if (err) return console('访问文件错误！' + err.message)
//     console.log(stat.isFile());
//     console.log(stat.size + '字节')
//     console.log(stat.birthtime)
// })

const fs = require('fs');
fs.stat(__dirname,(err,stat) => {
    if (err) return console.log('访问失败！：' + err,message)
    console.log('大小' + stat.size + '字节')
    console.log('判断是否为路径：' + stat.isDirectory()) 
})