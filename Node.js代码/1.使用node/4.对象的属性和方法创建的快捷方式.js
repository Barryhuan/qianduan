let name = '老王'
let age = 20
let sex = '男'
let run = function () {
    console.log(sex);
}
// 普通的定义对象方式
let pergon = {
    name : name,
    age : age,
    sex : sex,
    run : run
}

// 快捷定义对象的方式 
let person = {
    name,
    age,
    sex,
    run,
    say() {
        console.log('傻逼东西');
    }
}

console.log(person);