// 导入
import { a1, b1, c1 } from './2. as关键字重命名.js'

console.log(a1, b1, c1) // 1 2 3

// 将导入的变量进行再次命名
import { a1 as a11, b1 as b11, c1 as c11 } from './2. as关键字重命名.js'

console.log(a11, b11, c11) // 1 2 3