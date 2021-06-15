const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject('我要决定另一个状态!!!'), 3000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(p1), 1000)
})

// p1的状态决定了p2的结果

p2
  .then(
    result => console.log(result)
  )
  .catch(
    error => console.log(error)
  )