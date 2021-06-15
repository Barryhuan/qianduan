function createObject(name, age, sex) {
    var obj = new Object()
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    return obj
}

var a = createObject('老王', 50, '男')
console.log(a)
var b = createObject('老许', 20, '女')
console.log(b)
// 优点：可以批量生产的对象
// 缺点：无法指定对象类型