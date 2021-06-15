// 设置全局变量
// let color = 'red'
// 设置对象方法
let a = {
    color : 'red'
} 
// 设置要被调用的函数
// function person() {
//     console.log(this.color)
// }
// // 调用apply改变成this的值
// person.apply(a)
// // 调用call改变this的值
// person.call(a)
// // 调用bind方法将改变this的函数指针给b变量
// let b = person.bind(a)
// b()
// let c = person.bin


function person (va1, va2) {
    return va1 + va2
}

console.log(person.call(a, 1, 2))
console.log(a)

