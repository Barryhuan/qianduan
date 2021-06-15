// 创建MVVM构造函数,参数是传入的对象
function MVVM(options) {
    // 将传入的对象赋值给MVVM的$options属性
    this.$options = options
    // 将$options的data属性赋值给当前对象的_data属性
    var data = this._data = this.$options.data
    // 存储当前对象
    var el = this
    // 利用Object的keys方法将伪数组data转化为只有属性名的数组
    Object.keys(data).forEach(function (key) {
        // 将属性名传入对象的_proxy方法
        el._proxy(key)
    })
}
// 为当前对象的原型对象定义数据代理的方法，_proxy
MVVM.prototype = {
    // 接收key属性名
    _proxy: function (key) {
        // 获取当前对象
        var el = this
        // 调用Object的defineProperty方法修改属性特性
        Object.defineProperty(el, key, {
            conifgurable: false,
            enumerable: false,
            // 返回修改后的属性
            get: function proxyGetter () {
                return el._data[key]
            },
            // 监听属性的变化，并将新值赋值给当前数据属性
            set: function proxySetter (newValue) {
                el._data[key] = newValue
            }
        })
    }
}