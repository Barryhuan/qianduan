let a = {
    name : '老王',
    age : 20,
    sex : 'sex',
    run : function () {
        console.log(name);
    }
}

let { name : fuckname, age, sex, run} = a
// name : fuckname 这是为了重新命名变量
fuckname = '老许';
console.log(fuckname);
console.log(age);
console.log(sex);
console.log(run.toString());
console.log(a.name); // 并不会改变对象内部的变量