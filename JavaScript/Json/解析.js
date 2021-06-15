var book = {
    title: '《百年孤独》',
    money: 200,
    authod: '著名作家',
    year: [
        2000
    ]
}
// JSON.stringify() 可以将js的对象转化为json字符串保存
// JSON.stringify()有三个参数
// 第一个：js对象
// 第二个：筛选出要存入的对象属性 如：['title', 'money']，那样只会存入这2个属性
// 第三个：字符串属性每行前之间的间隔，最多为10

// {
 //这里的间隔   //"title":"《百年孤独》",
 //这里的间隔    //"money":200,
 //这里的间隔    //"authod":"著名作家",
 //这里的间隔    //"year":[2000]
// }


var bookJson = JSON.stringify(book)

console.log(typeof bookJson) // {"title":"《百年孤独》","money":200,"authod":"著名作家","year":[2000]}
var bookParse = JSON.parse(bookJson)

console.log(typeof bookParse) // { title: '《百年孤独》', money: 200, authod: '著名作家', year: [ 2000 ] }
var bookParse1 = JSON.parse(bookJson, function (key, value) {
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
console.log(bookParse1)
