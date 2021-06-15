let date = new Date()
// 获取时间date.getTime()
console.log(date.getTime())
console.log(date.setTime(15563529633831))
console.log(date.valueOf())


// 获取年
console.log(date.getFullYear())
console.log(date.getUTCFullYear())
// 设置年
console.log(date.setFullYear(2017))
console.log(date.setUTCFullYear(2017))
console.log(date.toLocaleString())


// 获取月
console.log(date.getMonth())
console.log(date.getUTCMonth())
// 设置月
console.log(date.setMonth(0))
console.log(date.setUTCMonth(0))
console.log(date.toLocaleString())


// 获取日期
console.log(date.getDate())
console.log(date.getUTCDate())
// 设置日期
console.log(date.setDate(20))
console.log(date.setUTCDate(20))
console.log(date.toLocaleString())

// 获取星期，不能设置星期
console.log(date.getDay())
console.log(date.getUTCDay())

// 获取时
console.log(date.getHours())
console.log(date.getUTCHours())
// 设置时
console.log(date.setHours(8))
console.log(date.setUTCHours(8))
console.log(date.toLocaleString())


// 获取分
console.log(date.getMinutes())
console.log(date.getUTCMinutes())
// 设置分
console.log(date.setMinutes(20))
console.log(date.setUTCMinutes(20))
console.log(date.toLocaleString())


// 获取秒
console.log(date.getSeconds())
console.log(date.getUTCSeconds())
// 设置秒
console.log(date.setSeconds(20))
console.log(date.setUTCSeconds(20))
console.log(date.toLocaleString())


// 获取毫秒
console.log(date.getMilliseconds())
console.log(date.getUTCMilliseconds())
// 设置毫秒
console.log(date.setMilliseconds())
console.log(date.setUTCMilliseconds())
console.log(date.toLocaleString())

// 获取本地时间和UTC时间的分钟差
console.log(date.getTimezoneOffset()) // -480
