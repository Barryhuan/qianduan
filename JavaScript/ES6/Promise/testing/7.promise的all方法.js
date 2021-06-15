let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = Promise.resolve(3)
let p4 = Promise.resolve(4)
let p5 = Promise.resolve(5)
let ps = [p1, p2, p3, p4, p5]

Promise.all(ps).then(value => console.log(value.length)).catch(err => console.log(err)) // 5


let promise1 = Promise.resolve(1)
let promise2 = Promise.resolve(2)
let promise3 = Promise.resolve(3)
let promise4 = Promise.reject(new Error('我淦！'))
let promise5 = Promise.resolve(5)
let promises = [promise1, promise2, promise3, promise4, promise4, promise5]

Promise.all(promises).then(value => console.log(value.length)).catch(err => console.log(err)) // Error: 我淦！