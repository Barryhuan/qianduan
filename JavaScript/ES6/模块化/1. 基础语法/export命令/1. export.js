// export命令
/*
  ~ export命令用于规定模块的对外接口
  ~ 一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取
  ~ 如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量
  ~ export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系
*/

//~ 1. export命令的规范使用
//? 输出变量
// 必须采取声明形式
export let a = 1

/*
  export 1
  export a
  上面两种写法都会报错，因为没有提供对外的接口
  写法1：直接输出 1
  写法2：通过变量m，还是直接输出1
  1只是一个值，不是接口
  ? 正确写法：
    * 写法一
    export var m = 1;

    * 写法二
    var m = 1;
    export {m};

    * 写法三
    var n = 1;
    export {n as m};
    它们的实质是，在接口名与模块内部变量之间，建立了一一对应的关系
*/

//? 输出对象
let a1 = 1
let a2 = 2
let a3 = 3
export { a1, a2, a3 }

let aAll = {
  a1: a1,
  a2: a2,
  a3: a3
}

export { aAll }

/*
  ? 错误写法
    export {
      a1: a1,
      a2: a2,
      a3: a3
    }

  ? 正确写法
    export {
      a1,
      a2,
      a3
    }
*/

//? 输出函数
export function q1() {}

/*
  ?错误写法
    * 写法1
      let b1 = function () {}
      export b1
    * 写法2
      function b1() {}
      export b1
  ?正确写法
    * 写法1
      let b1 = function() {}
      export { b1 }

    * 写法2
      function b1() {}
      export { b1 }

    * 写法3
      export function b1() {}

    * 写法4
      export { b1 as b2 }
*/

//? 输出类
export class A {}

/*
  ?错误写法
    let c = class {}
    export c

  ?正确写法
    * 写法1
      export class c {}

    * 写法2
      let c = class {}
      export { c }

    * 写法3
      let c = class {}
      export { c as c1 }
*/

