let a = [1, 2, 4, 3]
console.log(a)
// 这个不能比较2者之间的大小
// 只能颠倒数组的位置
console.log(a.reverse())
// 通过sort（）方法里调用比较函数
console.log(a.sort(con))
// 设置比较函数
function con(value1, value2) {
    // 1代表第一个参数在第二个参数的后面，也就是降序
    // -1代表第一个参数在第二个参数的前面，也就是升序
    // 0代表第一个参数和第二个参数相等
    // if (value1 < value2) {
    //     return 1
    // } else if (value1 > value2){
    //     return -1
    // } else {
    //     return 0
    // }
    return  value2 - value1
    // value2 - value1 降序：从大到小
    // value1 - value2 升序：从小到大
}

console.log(a)
