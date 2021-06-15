var book = {
    title : '《百年孤独》',
    money: 200,
    authod: '著名作家',
    // toJSON的值建赋给第二参数的作为传入参数
    // toJSON: function () {
    //     return this.title
    // },
    year : [
        2000
    ]
}
// 普通的序列化Son
// var bookjson = JSON.stringify(book)
// console.log(bookjson) // {"title":"《百年孤独》","money":200,"authod":"著名作家","year":[2000]}

// 第二个参数有数组和函数
// 数组的['title', 'meney“]会筛选出数组里的属性
// var bookJsonArr = JSON.stringify(book, ['title', 'money'])
// console.log(bookJsonArr) // {"title":"《百年孤独》","money":200}

var bookJsonArr1 = JSON.stringify(book, function (key, value) {
    // 函数必须要返回value
    switch(key) {
        case'title':
            return '《傻逼东西》'
        case'money' :
            return undefined
        case'authod' :
            return '著名傻逼'
        case'year' :
            return 3000
        default: 
            return value
    }
})
console.log(bookJsonArr1)

// 第三个参数是格式化，也就是缩进
// 可以是空格和其他字符串
// 缩进最好只有10个

// var bookJsonWrap = JSON.stringify(book, null, 10)
// console.log(bookJsonWrap)
// {
//     "title": "《百年孤独》",
//     "money": 200,
//     "authod": "著名作家",
//     "year": [
//               2000
//     ]
// }
// var bookJsonWrap1 = JSON.stringify(book, null, '------')
// console.log(bookJsonWrap1)
// {
//     ------"title": "《百年孤独》",
//     ------"money": 200,
//     ------"authod": "著名作家",
//     ------"year": [
//     ------------2000
//     ------]
//     }
