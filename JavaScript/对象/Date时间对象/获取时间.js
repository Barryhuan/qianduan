let date = new Date();
// 获取到一个国标准时间
console.log(date) // 2019-04-27T08:05:31.655Z
// 以星期，月，日，年的格式输出
console.log('toDateString方法：' + date.toDateString()) // toDateString方法：Sat Apr 27 2019
// 以时，分，秒，时区的形式输出
console.log('toTimeString方法：' + date.toTimeString()) // toTimeString方法：16:05:31 GMT+0800 (GMT+08:00)
// 以本地的格式输出年月日
console.log('toLocaleDataString方法：' + date.toLocaleDateString()) // toLocaleDataString方法：2019-4-27
// 以本地的格式输出时，分，秒
console.log('toLocaleTimeString方法：' + date.toLocaleTimeString()) // toLocaleTimeString方法：16:05:31
// 输出完整国际时间
console.log('toUTCString方法' + date.toUTCString()) // toUTCString方法Sat, 27 Apr 2019 08:05:31 GMT

//================================================================================================================================

// 输出完整时间
console.log('toString方法：' + date.toString()) // toString方法：Sat Apr 27 2019 16:05:31 GMT+0800 (GMT+08:00)
// 输出本地格式的时间
console.log('toLocaleString方法：' + date.toLocaleString()) // toLocaleString方法：2019-4-27 16:05:31
// 返回19701月1日到现在的毫秒数 
console.log('valueOf方法：' + date.valueOf())  // valueOf方法：1556352331655