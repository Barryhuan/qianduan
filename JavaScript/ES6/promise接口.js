// promise是为了以同步的流程表示异步操作，也是为了避免嵌套地狱
// 主要有promise构造函数和实例的then方法
// promise有3种状态，pending 初始化状态， fullfilled 成功状态， rejected 失败状态

let promise = new Promise((resolve, reject) => {
    // 创建实例的时候就已经是初始化状态了
    // 在异步操作里面实现状态的改变
    setTimeout(() => { 
        resolve('我是你爸爸') // 成功的状态，而且可以往里面传递参数
        reject('我是你爷爷') // 失败的状态，也可以加参数
    }, 2000)
})

promise.then((data) => { // 成功时的回调
    console.log(data) // 我是你爸爸
}, (error) => { // 失败时的回调
    console.log(error) // 我是你爷爷
})