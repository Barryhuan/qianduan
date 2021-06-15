/*
  WeakSet与Set类型，值也是不重复的。
  区别：
    * 成员只能是对象
    * 不可遍历
  WeakSet构造函数接受一个数组或类似数组的对象作为参数（具有 Iterable 接口的对象都可以）
  方法：
    * add()：添加成员，返回weakset本身
    * delete()：删除成员，返回布尔值，表示删除是否成功
    * has()：判断成员是否存在，返回布尔值，表示成员是否存在
*/

let weak1 = new WeakSet([[1, 2], [3, 4]]) // WeakSet {[1, 2], [3, 4]}

// 数组的成员必须为对象才可以
// let weak2 = new WeakSet([1, 2, 3, 4])

//~ 方法：
//? add()
let weak3 = new WeakSet()
let arr = [[1, 2], [3, 4]]
weak3.add(arr) // WeakSet {[1, 2], [3, 4]}

//? has()
weak3.has(arr) // true

//? delete()
weak3.delete(arr) // WeakSet {}