// 模块的整体加载
/*
~  模块的整体加载是将模块的所有属性和方法作为一个对象输出
~  可以通过调用对象的属性一样使用
*/

import * as all from './导出所有模块.js'

console.log('圆面积：' + all.area(4)) // 圆面积：50.26548245743669
console.log('圆周长：' + all.circumference(14)); // 圆周长：87.96459430051421

//~ 这种方式虽然简便，但是却不能修改里面的属性和方法（对象里的属性倒是可以，不建议这么做）

/*
~  all.f = 2 报错
~  all.area = function () {} 报错
*/

all.a.b = 3
console.log(all.a.b) // 3