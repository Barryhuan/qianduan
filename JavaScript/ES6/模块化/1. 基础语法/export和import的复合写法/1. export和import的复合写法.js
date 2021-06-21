//~ export和import的复合写法（转发写法）
/*
  如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起
  export { foo, bar } from 'my_module'

  可以简单理解为：
  import { foo, bar } from 'my_module'
  export { foo, bar }

  注意：写成一行以后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar
*/

// export { foo, bar } from './导出.js'

// foo // foo is not defined
// bar // bar is not defined

//~ 模块的接口改名和整体输出，也可以采用这种写法
//? 接口改名
// export { foo as foo1 } from './导出.js'

//? 整体输出
// export * from './导出.js'

//? 整体改名输出
// export * as all from './导出.js'

//? 默认接口（将接受到的默认接口作为本模块的默认接口输出）
// export { default } from './导出.js'

//? 具名接口改为默认接口（将接受到的具体接口作为本模块的默认接口输出）
export { es6 as default } from './1.2 导出.js'

/*

  等同于
  import { es6 } from './someModule';
  export default es6;

*/

//? 默认接口改为具体接口（将接受到的默认接口作为本模块的具体接口输出）
export { default as es7 } from './1.2 导出.js'
