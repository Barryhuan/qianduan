// 设置一个调用mmp函数的函数
function nnp() {
    mmp()
}
// 调用caller方法返回调用改函数的函数的引用
function mmp() {
    console.log(arguments.callee.caller)
}
// 调用nnp函数
nnp()
