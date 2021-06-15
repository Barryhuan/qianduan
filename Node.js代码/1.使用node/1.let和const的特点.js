/* 
 简单赋值
 var a = 10;
 console.log(a);
*/

/* 
变量提升，显示为undefined
console.log(a);
var a = 10;
*/

/* 
ES6新标准赋值关键字
let a = 10;
console.log(a);
*/

/* 
 没有变量提升，会直接报错
 console.log(a);
 let a = 10;
*/

/* 
 给变量重新赋值，不会报错
 var b = 10;
 b = 20;
 console.log(b);
*/

/* 
 ES6新标准，创建常量，重新赋值报错
 const b = 10;
 b = 20;
 console.log(b);
*/

/* 
 var 没有作用域
 for (var i = 1; i <= 10; i++) {}
 console.log(i);
*/

/* 
 let 有作用域，会报错
 for (let i = 1; i <= 10; i++) {}
 console.log(i);
*/

/* 
 const 有作用域，循环打印b，因为每个i++的作用域都是新的
 for(let i = 1; i <= 10; i++) {
     const b = 10;
     console.log(b);
 }
*/

/* let和const的特点：
1.没有变量提升
2.拥有作用域
*/

// const的特点:不能重新赋值