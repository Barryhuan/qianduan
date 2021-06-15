var a = 'abcdefghijklnmqwe'
// 判断指定的字符串存不存在
console.log(a.includes('w')) // true
console.log(a.includes('6')) // false
// 判断是否为字符串开头
console.log(a.startsWith('a')) // true
// 判断是否为字符串结尾
console.log(a.endsWith('e')) // true
// 字符串循环次数
console.log(a.repeat(6))