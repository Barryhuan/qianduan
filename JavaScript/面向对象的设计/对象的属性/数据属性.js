let a = {
    // name : '老王'
    // age : 20,
    // sex : '男'
}
// 当对象拥有属性时，这个configurable无法修改的特性将无效
Object.defineProperty(a, 'name', {
    // 设置无法用delete删除，无法修改特性，无法改为变为访问器属性,重新调用除了自身会报错
    // configuralbe : false,
    // 设置属性无法通过for-in循环
    // enumerable : false,
    // // 无法修改特性的值
    // writable : false,
    // 属性的值
    value : '老许'
})

//  delete a.name 不会报错，但会忽略
//  Object.defineProperty(a, 'name', {
    //  configurable : true,
    //  enumerable : true,
    // writable : true,
    //  value : '老许'
// })
// console.log(a)

// a.name = '老潘' 不会报错，但会忽略
// 打印是否能for-in循环
console.log(a.propertyIsEnumerable('name'))

// a.name = '老潘'
console.log(a.name)