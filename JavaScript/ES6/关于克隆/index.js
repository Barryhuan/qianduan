function hasMethods (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1)
}

function cloneMethods (obj) {
    let result, leixin = hasMethods(obj)
    if (leixin === 'Object') {
        result = {}
    } else if (leixin === 'Array') {
        result = []
    } else {
        return result
    }

    for (let i in obj) {
        let value = obj[i]
        if (hasMethods(value) === 'Object' || hasMethods(value) === 'Array') {
            result[i] = cloneMethods(value)
        } else {
            result[i] = value
        }
    }
    return result
}

var objj = {
    a: 'a',
    b: 'b',
    c: {
        c1: 'c1',
        c2: 'c2'
    }
}

var objCopy = cloneMethods(objj)
objCopy.a = 'b'
objCopy.b = 'a'
objCopy.c.c1 = 'c2'
objCopy.c.c2 = 'c1'
console.log(objj)
console.log(objCopy)

console.log(hasMethods(objj))

console.log(typeof Object.prototype.toString.call(objj))