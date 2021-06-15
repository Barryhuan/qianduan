/*
  WeakMap和Map的区别：
    * 键名必须为对象
    * 没有遍历操作（keys(),values(),forEach()）和clear()，size()操作
  适用于临时存储的对象，不会占用内存
*/

// WeakMap 可以使用 set 方法添加成员
let wm1 = new WeakMap();
let key = { foo: 1 };
wm1.set(key, 2);
wm1.get(key) // 2

// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
let k1 = [1, 2, 3];
let k2 = [4, 5, 6];
let wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2.get(k2) // "bar"