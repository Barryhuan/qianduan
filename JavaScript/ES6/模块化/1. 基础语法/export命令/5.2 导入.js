import _, { each, forEach } from './5.1 导出.js';

console.log(_) // [Function: default]
console.log(each) // [Function: each]
console.log(forEach) // [Function: each]

console.log(each === forEach) // true
