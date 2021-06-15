let a = [10, 'a', 10, 6, 'as']
console.log(a.toLocaleString())
// 直接在控制台输出的数组对象带方框
console.log(a)
// join（）的功能和tostring一样，不过它可以改变分隔符
console.log(a.join('-') )
// String（）只能在以参数的位置带入，toString方法也可以
console.log(String(a))
// tolocaleString（）是根据本地格式来输出的
console.log(a.toLocaleString())