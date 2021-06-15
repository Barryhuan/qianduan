let both = true
let promise1 = new Promise((resolve, reject) => {
    if (both) {
        resolve('调用成功！')
    } else {
        reject(new Error('我报错了！！！'))
    }
})

promise1.then(result => console.log(result), error => console.log(error))