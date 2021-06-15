// 2种私有变量的在一起回出错
// 普通的私有变量
// function Mybaby() {
//     var a  = 10
//     var b = function () {
//         return b
//     }
//     // 特权方法，也就是公共方法
//     this.public = function() {
//         console.log(a)
//         console.log(b)
//     }
// }
// // 缺点，使用构造函数会造成创造新的实例
// var baby1 = new Mybaby()
// baby1.public()

// 静态是私有方法
// 优点：私有变量和函数可以由实例共享
(function () {
    var c = 10
    var method = function () {
        return a
    }
    Myapply = function () {}
    Myapply.prototype.public  = function () {
        console.log(c)
        console.log(method)
    }
}) ()

var my1 = new Myapply()
my1.public()

// 模块模式(也叫单例模式),单例指的是只有一个实例的对象
function application() {
    var a = 10;
    var method = function () {
        return a;
    }
    return {
        publicmethod: function () {
            console.log(a)
            console.log(method)
        }
    }
}

var applicat = application()
applicat.publicmethod()
