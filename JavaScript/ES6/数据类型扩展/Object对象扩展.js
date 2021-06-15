// Object.is（）是判断2个数据字符串是否相等
console.log(Object.is(0, -0)) // false
console.log(Object.is(NaN, NaN)) // true

// Object.assign(目标对象，源对象)
// 目标对象
var obj = {}
// 源对象
var obj1 = {
    username : '男'
}
// Object.assign是将源对象的属性和方法赋值给目标对象,而且是重写创建一个对象，也不是引用
Object.assign(obj, obj1)
console.log(obj) // { username: '男' }
obj.age = 20
console.log(obj1)
console.log(obj)

// __proto__可以将其他队象当做自己的原型
var obj2 = {}
var obj3 = {
    mmp: '妈卖批',
    sayMMp(){
        return this.mmp
    }
}

obj2.__proto__ = obj3
console.log(obj2.mmp,obj2.sayMMp())