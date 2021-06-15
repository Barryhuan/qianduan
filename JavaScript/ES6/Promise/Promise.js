// 进阶的Promise
// 一个Promise对象状态来决定另一个Promise对象的状态

var p1 = new Promise((resolve, reject) => {
    reject('aaa')
})

var p2 = new Promise((resolve, reject) => {
    resolve(p1)
})

p2.then(function (value) {
    console.log('成功！', value)
}, function (error) {
    console.log('失败！', error)
})

// 失败！ aaa