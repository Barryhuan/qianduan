// 第一种调用递归的方法（普通的调用）
function sun(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * sun(num - 1)
    }
}
console.log(sun(5))  // 120

//第二种方法 严格模式下回报错
function sun(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * arguments.callee(num - 1)
    }
}

let a = sun
sun = null
console.log(a(5)) // 120

// 第三种方法 通用
let a = (function f(num){
    if (num <= 1) {
        return 1
    } else {
        return num * f(num - 1)
    }
})

console.log(a(5)) // 120