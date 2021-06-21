// ES6和CommonJS模块化的差异
/*
! 三个重大差异
~ CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用
~ CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
~ CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段
*/

//~ 1
/*
  CommonJS模块输出的是一个值的拷贝，输出的值会被缓存，模块内部的变化无法影响输出的值，除非写成一个函数，才能得到内部变化的值
  ES6模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块
*/



//~ 2
/*
  第二个差异是因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。
  而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成
*/
