// localeCompare方法：比较字符串在字母表上的大小
let a = 'yellow'
function compare(z) {
    let sb = a.localeCompare(z)
    if (sb < 0 ) {
        console.log(sb)
        return '这个yellow在' + z + '前面'
    } else if (sb > 0) {
        console.log(sb)
        return'这个yellow在' + z + '后面'
    } else {
        console.log(sb)
        return'这个yellow跟' + z + '一样大小'
    }
}

console.log(compare('yellow'))
console.log(compare('black'))
console.log(compare('zoo'))
