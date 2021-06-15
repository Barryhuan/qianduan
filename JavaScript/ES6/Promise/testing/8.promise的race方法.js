let resolvesd = Promise.resolve('123')
let rejected = Promise.reject(new Error('我丢'))

Promise.allSettled([resolvesd, rejected]).then(result => console.log(result))

// [
//   { status: 'fulfilled', value: '123' },
//   { status: 'rejected', reason: 'Error: 我丢' }
// ]