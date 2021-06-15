function promise1(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, '时间到，我被调用了')
  })
}

// 三秒后被调用
promise1(3000).then((value) => { console.log(value) })