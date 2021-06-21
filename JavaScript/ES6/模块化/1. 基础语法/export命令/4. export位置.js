// export和import的位置

/*
  ~ export和import命令只可以放在模块顶层的位置，放在代码块中则会报错
  ~ 因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷
*/

//? 正常
export var a = 1
import { foo } from './3. export动态绑定值.js'

console.log(foo)

// !报错
{
  export var a = 1
  import { foo } from './3. export动态绑定值.js'
  console.log(foo)
}