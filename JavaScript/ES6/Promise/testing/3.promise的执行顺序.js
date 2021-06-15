function promise1(ms) {
  return new Promise((resolve) => {
    console.log('promise')
    setTimeout(resolve, ms, '时间到，我被调用了')
  })
}
// 三秒后被调用
promise1(1).then((value) => { console.log(value) })
console.log('Hi，Boy')

// 1. promise
// 2. Hi, Boy
// 3. 时间到，我被调用了