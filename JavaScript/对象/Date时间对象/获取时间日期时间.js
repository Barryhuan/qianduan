var date = new Date()
// new Date()传入的是毫秒数的
// 获取当前时间的2个Date方法


// 显示的是外国时间换算的毫秒数
//------------------------------- Date.parse() ---- 传入的格式(字符串)：------------------------------------
// 1. 月/日/年
var d1 = Date.parse("5/20/2019")
console.log("d1：" + d1) // 1558281600000

// 2. 英文月/日/年
var d2 = Date.parse("May/20/2019")
console.log("d2" + d2) // 1558281600000

// 2.1 
var d2_1 = Date.parse("May 20,2019")
console.log("d2_1：" + d2_1) // 1558281600000

// 3. 英文星期几 英文月 日 年 时：分：秒 时区
var d3 = Date.parse("Mon May 20 2019 00:00:00 GMT+0800")
console.log("d3：" + d3) // 1558281600000

// 4. YYYY-MM-DDTHH:mm:ss.sssZ
var d4 = Date.parse("2019-05-20T08:52:30")
console.log("d4：" + d4) //1558313550000

// ------------------------------Date.UTC() ---- 传入的格式(整数)：---------------------------------
// 年，月（0-11）,日（1）,时(0)，分(0), 秒(0)
var d5 = Date.UTC(2019, 4, 20, 08, 58, 00)
console.log("d5：" + d5) // 1558342680000



// ---------------------------------
var dateppp = new Date(Date.parse()) //-------
var datepppp = new Date(Date.UTC()) //-------
// --------------------------------
// 上面的那2种格式是用来显示外国时间的





// 下面这种用new Date()是来显示本地时间的
// new Date会根据传进来的格式来调用parse和UTC，但是这些都会根据本地格式来变化
var date1 = new Date()
console.log("date1：" + date1)
// 传入格式：字符串
// 1.完整日期
var date2 = new Date("2019-5-20 09:02:00")
console.log(date2) // 2019-05-20T01:02:00.000Z
// 2.年月日
var date3 = new Date("2019-5-20")
console.log(date3) // 2019-05-19T16:00:00.000Z
