var a = 6
function f1 () {
    return a
}

function f2 () {
    return '我是module1'
}

module.exports = {
    f1: f1,
    f2: f2
}