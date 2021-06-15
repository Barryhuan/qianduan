const fs = require('fs')
fs.readFile(__dirname + '/files/1.txt', 'utf-8', (err, data) => {
    if (err) return console.log('获取文件信息失败!：' + err.message)

    let arr = data.split(' ')
    console.log(arr)
    let list = []
    arr.forEach(item => {
        if (item.length > 0) {
            let a = item.replace('=', ' ')
            list.push(a)
        }
    })

    fs.write(__dirname + '/files/1-list.txt', list.join('\n'), err => {
        if (err) return console.log('获取文件信息失败！：' + err.message)
        console.log('获取文件信息成功！')
    })
})