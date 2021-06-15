function Person(a, ...arry) {
    this.a = a
}

var a = new Person(1, 2, 3, 4, 5)
console.log(a)

var b = new Person(4, 3, 6, 6, 6 , 6)
console.log(b)

// ...是数组，用来代替arguments的，拥有数组的方法和属性
// 当...作为函数参数时，则代替传入的参数，要是前面有其他命名参数的时候，则占用一个位置，...则为剩下的数
// 而且...只能作为最后一个参数，否则会报错

// 当作为数组时，则可以代替整个数组插入到其他数组当中
var aar1 = [1, 2, 3, 4, 5]
var aar2 = [1, ...aar1, 6, 6, 6]
console.log(aar2)

function f1() {
    let n = 5;
    if (true) {
      let n = 10;
      console.log(n); 
    }
    console.log(n); // 5
}

f1()

