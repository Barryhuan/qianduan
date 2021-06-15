// 调用fs核心模块的API
const fs = require('fs');
// readFile的参数
// 1.path：即路径
// 2.option：即编码格式
// 3.err和data,err是错误对象，data是文件数据
fs.readFile('./files/1.txt','utf-8',(err,data) => {
    if (err) {
        return console.log('访问文件错误：'+err.message)
    }
    console.log(err);
    console.log(data);
});