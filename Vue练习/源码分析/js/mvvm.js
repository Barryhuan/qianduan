function MVVM(options) {
    this.$options = options;
    var data = this._data = this.$options.data;
    var me = this;

    
    Object.keys(data).forEach(function(key) {
        me._proxy(key);
    });

    observe(data, this);
    // 模板解析
    // 编译节点,传入el='#test'或者body，传入当前对象vm
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    _proxy: function(key) {
        var me = this;
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    }
};