//~ import()动态加载

/*
~ import命令是静态加载(同步)，必须在模块顶层调用，无法在代码块里调用
~ commonJS的require() 是动态加载(同步)，可以在任何位置调用，并返回一个模块对象（运行时执行）
~ ES6的import() 是动态加载(异步)，可以在任何位置调用，并返回一个promise对象（运行时执行）
~ import命令能够接受什么参数，import()函数就能接受什么参数
*/

let result = import('./3.1 导出模块.js')
console.log(result) // Promise { <pending> }

//~ import()加载模块成功以后，这个模块会作为一个对象，当作then方法的参数

//? all为导出模块输出的对象
result.then(all => {
  console.log(all) // { a: 1, b: 2, default: { c: 1, d: 2 }
})

//? 解构赋值的写法
result.then(({a, b, default: def}) => {
  console.log(a, b, def) // 1 2 { c: 1, d: 2 }
})

//~ import加载多个模块
let moreModule = Promise.all([
  import('./3.1 导出模块.js'),
  import('./3.2 导出模块.js'),
  import('./3.3 导出模块.js')
])

moreModule.then(all => {
  console.log(all)
  /*
    [
      [Module: null prototype] { a: 1, b: 2, default: { c: 1, d: 2 } },
      [Module: null prototype] { a1: 1, b1: 2, default: { c1: 1, d1: 2 } },
      [Module: null prototype] { a2: 1, b12: 2, default: { c2: 1, d2: 2 } }
    ]
  */
})

moreModule.then(([m1, m2, m3]) => {
  console.log(m1, m2, m3)
  /*
    { a: 1, b: 2, default: { c: 1, d: 2 } }
    { a1: 1, b1: 2, default: { c1: 1, d1: 2 } }
    { a2: 1, b2: 2, default: { c2: 1, d2: 2 } }
  */

})

//~ 应用场景

//? 1.按需加载
// import()可以在需要的时候，再加载某个模块

button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open()
  })
  .catch(error => {
    /* Error handling */
  })
})

// import()方法放在click事件的监听函数之中，只有用户点击了按钮，才会加载这个模块


//? 2.条件加载
// import()可以放在if代码块，根据不同的情况，加载不同的模块
if (condition) {
  import('moduleA').then()
} else {
  import('moduleB').then()
}


//? 3.动态的模块路径
// import()允许模块路径动态生成
import(f())
.then()

// 上面代码中，根据函数f的返回结果，加载不同的模块