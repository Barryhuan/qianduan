// import基础语法

/*
~  import命令接受一对大括号，里面指定要从其他模块导入的变量名
~  大括号里面的变量名，必须与被导入模块对外接口的名称相同
~ import命令具有提升效果，会提升到整个模块的头部，首先执行
~ CommonJS 模块的require命令和 ES6 模块的import命令，可以写在同一个模块里面，但千万不要这么做，达不到预期效果
*/

import { a, b } from './导出数据.js'

console.log(a, b) // 1 { c: 2, e: 3 }

//~ 可以通过重命名的方式更改导入的变量名

import { a as a1, b as b1 } from './导出数据.js'

console.log(a1, b1) // 1 { c: 2, e: 3 }

/*
~ import命令输入的变量都是只读的，因为它的本质是输入接口
~ 不允许在加载模块的脚本里面，改写接口（如果变量是对象，可以修改对象里的属性，但不能修改对象本身）
*/

import { a as a2, b as b2 } from './导出数据.js'

// a2 = 3 // 报错

b2.c = 66
console.log(b2) // { c: 66, e: 3 }

//~ import是静态执行，不能使用表达式和变量
/*
  ? 错误写法1
    import { 'f' + 'oo' } from '../export命令/3. export动态绑定值.js'

  ? 错误写法2
    let module = 'my_module'
    import { foo } from module

  ? 错误写法3
    if (x === 1) {
      import { foo } from 'module1'
    } else {
      import { foo } from 'module2'
    }
*/

//~ 如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。
/*
  import { a } from './导出数据.js'
  import { b } from './导出数据.js'

  // 等于

  import { a, b } from './导出数据.js'
*/


//~ import语句执行所加载的模块，但是不会输入任何值
// 仅仅执行导出所有模块.js模块，但是不输入任何值
import './导出所有模块.js'

// console.log(f1) // f1 is not defined


