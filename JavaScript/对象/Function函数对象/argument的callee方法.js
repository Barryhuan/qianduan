// 设计阶乘函数
function factorial(con) {
    if (con <= 1) {
        return 1
    } else {
        return con * arguments.callee(con - 1)
    }
}

// 将factorial函数赋给给xz
let xz = factorial
// 将factorial设为空
factorial = null
// 调用函数
console.log(xz(5))