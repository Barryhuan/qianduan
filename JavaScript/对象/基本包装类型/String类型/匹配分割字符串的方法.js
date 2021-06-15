let str = 'a-b-c-d-e-r-g-1-2-3-4-5-6a'
console.log(str.match(/a/gi)) // [ 'a', 'a' ]

// match是根据正则表达式来匹配相对应的字符串，并将符合的字符串分割成数组返回
// 参数：正则表达式