// export default

/*
~ export default的定义是为模块指定默认输出，在其他导入时可以随意指定输出变量名
~ export default在模块中只能执行一次，export可以执行多次
~ import导入export default输出时，import命令后面，不使用大括号
*/

//~ 使用export default输出各种数据类型
// export default不能写声明表达式

//? 输出变量
let a = 1
export default a

export default 1

/*
  错误写法
    export default let a = 1
*/

//? 输出函数
export default function () {}

let qq = function () {}
export default qq

/*
  错误写法
    export default function f() {}
*/

//? 输出对象
export default {
  a: 1,
  b: 2,
  c: 3
}

//? 输出类
export default class A {} // 其实这不是类声明表达式，而是类的变量表达式，有这种写法
export default class {}


//~ export default的原理
// export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句

/*

~  modules.js

?   function add(x, y) {
?     return x * y;
?   }

?   export {add as default};

/ 等同于

?   export default add;


~ app.js

?   import { default as foo } from 'modules';

// 等同于

?   import foo from 'modules';

*/

// 正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句

/*

// 正确
export var a = 1

// 正确
var a = 1;
export default a  <==> export { a as default }

// 错误
export default var a = 1

*/
