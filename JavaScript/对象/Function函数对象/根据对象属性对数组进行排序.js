function paixu(propertyName) {

    return function (value1, value2) {
        let v1 = value1[propertyName]
        let v2 = value2[propertyName]
        
            if (v1 < v2) {
                return -1
            } else if (v1 > v2) {
                return 1
            } else {
                return 0
            }
    }
}

let a = [ { name : '老许', age : 20}, { name : '老王', age : 10}, { name : '老潘', age : 30}, { name : '老子', age : 90}]

console.log(a.sort(paixu('name'))) // 传入到[propertyName]必须的是带''的字符串
console.log(a.sort(paixu('age')))
