// Map是类似对象的数据结构，对象的键值对的键名必须为字符串类型，map的键值对的键名可以为任何的数据类型
/*
  构造函数只接受数组，且每个成员都是一个双元素的数组
  实例属性：
    * size：返回成员数量
  方法：
    操作方法：
      * set(key，value)：添加成员，返回map本身
      * get(key)：获取成员，返回指定的成员的值
      * delete(key)：删除成员，返回布尔值，表示删除是否成功
      * has(key)：判断成员是否存在，返回布尔值，表示成员是否存在
      * clear()：清空set的所有成员，没有返回值
    遍历方法：
      * keys()：返回键名的遍历器
      * values()：返回键值的遍历器
      * entries()：返回键值对的遍历器
      * forEach()：使用回调函数遍历每一个成员
*/

//~ 定义一个Map
let m1 = new Map()
let o1 = { p: 1 , q: 2 }

m1.size // 0
m1.set(o1, 'hhh')
m1.get(o1) // hhh

m1.has(o1) // true
m1.delete(o1) // true
m1.has(o1) // false

//~ 通过map构造函数创建map实例
let m2 = new Map([
  ['name', 'Barry'],
  ['age', 23],
  ['sex', '男']
])

m2.get('name') // Barry
m2.has('sex') // true

//? 实现原理
let a3 = [['name', 'Barry'],['age', 23],['sex', '男']]
let m3 = new Map()

a3.forEach(([key, value]) => m3.set(key, value))  // Map(3) { 'name' => 'Barry', 'age' => 23, 'sex' => '男' }

//~ 将set和map做为map的参数创建map实例

let s1 = new Set([['title', '老许来了'], ['name', '老许']])
let sm1 = new Map(s1) // Map(2) { 'title' => '老许来了', 'name' => '老许' }

let mm1 = new Map([['title', '老许来了'], ['name', '老许']])
let sm2 = new Map(mm1) // Map(2) { 'title' => '老许来了', 'name' => '老许' }

//~ 同一个键名会覆盖值
let m4 = new Map()
m4
  .set('name', '老王')
  .set('name', '老许')
m4.get('name') // 老许

//~ 只有对同一个对象的引用，map才将其视为同一个键
let m5 = new Map()
m5.set([1], 1) // Map(1) { [ 1 ] => 1 }
m5.get([1])  // undefined

// 这两个数组的引用地址不同，因此get才无法获取到对应的值

let a4 = [1]
let m6 = new Map()
m6.set(a4, 3) // Map(1) { [ 1 ] => 3 }
m6.get(a4) // 3

// 引用地址相同才可以获取

//~ 遍历方法
let m7 = new Map([
  ['name', 'Barry'],
  ['age', 23]
])

//? keys()
for (let x of m7.keys()) {
  console.log(x)
}

/*
 * name
 * age
 */

//? values()
for (let x of m7.values()) {
  console.log(x)
}

/*
  Barry
  23
*/

//? entries()
for (let x of m7.entries()) {
  console.log(x)
}

/*
  ['name', 'Barry']
  ['age', 23]
*/

//~ ----------------------------------------------
// 这两种方法效果相同

for (let [key, value] of m7.entries()) {
  console.log(key, value)
}

/*
  name Barry
  age 23
*/

// m7默认调用entries()
for (let [key, value] of m7) {
  console.log(key, value)
}

/*
  name Barry
  age 23
*/

//~ ----------------------------------------------

//? forEach()
m7.forEach((key, value, self) => console.log(key, value, self))

/*
  Barry name Map(2) { 'name' => 'Barry', 'age' => 23 }
  23 age Map(2) { 'name' => 'Barry', 'age' => 23 }
*/

//! 数据类型转换
let m11 = new Map([['name', 'Barry'], ['title', 'Fuck']])

//~ Map和数组
//? map转数组
let a11 = [...m11] // // [ [ 'name', 'Barry' ], [ 'title', 'Fuck' ] ]

//? 数组转map
let m111 = new Map(a11) // Map(2) { 'name' => 'Barry', 'title' => 'Fuck' }

//~ Map和对象
//? map转对象
// 如果所有map键都是字符串，可以无损转化为对象
function strMapToObj(strMap) {
  let obj = {}
  for (let [k, v] of strMap) {
    obj[k] = v
  }
  return obj
}

let m22 = new Map()
m22
  .set('a', 1)
  .set('b', 2)
  .set('c', 3)
// Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

strMapToObj(m22) // { a: 1, b: 2, c: 3 }

// 如果有非字符串的键名，会被自动转化为字符串，再作为对象的键名

//? 对象转map
// 1
let obj = { a: 1, b: 2, c: 3 }
new Map(Object.entries(obj)) // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

// 2
function objToMap(strObj) {
  let map = new Map()
  for (let key of Object.keys(strObj)) {
    map.set(key, strObj[key])
  }
  return map
}

objToMap({a: 1, b: 2, c: 3}) // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

//~ map和JSON
/*
  分两种情况：
    * Map 的键名都是字符串，map => 对象Json
    * Map 的键名有非字符串, map => 数组Json
*/

//? map转Json

//* map => 对象Json
function strMapToObjJson(strMap) {
  return JSON.stringify(strMapToObj(strMap))
}

strMapToObjJson(new Map().set('name', 'Barry').set('age', 23)) // {"name":"Barry","age":23}

//* map => 数组Json
function mapToArrayJson(strMap) {
  return JSON.stringify([...strMap])
}

mapToArrayJson(new Map([[true, 'Barry'], [false, 23]])) // [[true,"Barry"],[false,23]]

//? Json转map
//* 对象Json => map
function jsonToStrMap(jsonStr) {
  return objToMap(JSON.parse(jsonStr))
}
jsonToStrMap('{"name":"Barry","age":23}') // Map(2) { 'name' => 'Barry', 'age' => 23 }

//* 数组Json => map
function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr))
}

jsonToMap('[[true,"Barry"],[false,23]]') // Map(2) { true => 'Barry', false => 23 }

