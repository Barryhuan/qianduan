import { foo } from './3. export动态绑定值.js'

console.log(foo) // bar

//~ 这里设置一个定时器，500毫秒后，输出foo，得到的是导入模块事实的值
setTimeout(() => {
  console.log(foo) // baz
}, 500)
