function czObjeat(name, age, sex) {
    let obj = new Object()
    obj.name = name
    obj.age = age
    obj.sex = sex
    obj.run = function () {
        console.log('我会' + this.name)
    }
    return obj
}

let a = czObjeat('老王', 20, '男')
console.log(a)
console.log(a.run())

// 批量生产具有相同属性的对象
// 缺点：对象类型都是Object，无法指定创造指定的对象类型
