// 创建Compile构造函数，接收节点对象和this对象
function Compile(el, vm) {  // el: '#test', vm: vm
    // 将vm赋值给外部的vm
    this.$vm = vm;
    // 首先判断是否为元素节点，有则赋值给$el，没有则获取文档中的'#test'
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
    // 判断是否有节点对象#test
    if (this.$el) {
        // 调用Compile的node2Fragment函数，创建一个存储所有节点的fragment属性
        this.$fragment = this.node2Fragment(this.$el); // this.$el = #test
        // 编译$framgment存储的节点
        this.init();
        // 将编译好的节点添加到文档中
        this.$el.appendChild(this.$fragment);
    }
}
// Compile的原型方法：
Compile.prototype = {
    // 将传入的节点对象的所有节点存储
    node2Fragment: function(el) { // el: #test
        // 创建存储容器
        var fragment = document.createDocumentFragment(),
        // 声明存储的变量
            child;
        // 将原生节点拷贝到fragment
        // 页面的DOM元素消失
        // 是个死循环，直到里面节点为Null才弹出
        while (child = el.firstChild) {
            // 添加到存储容器中
            fragment.appendChild(child);
        }
        // 返回存储容器
        return fragment;
    },

    init: function() {
        // 调用compile函数编译元素节点
        this.compileElement(this.$fragment);
    },

    compileElement: function(el) { // el: this.$fragment
        // 存储el里的节点对象
        var childNodes = el.childNodes,
            me = this;
        // 将伪数组转化为真数组并调用forEach方法遍历节点对象
        [].slice.call(childNodes).forEach(function(node) {
            // 获取节点文本内容
            var text = node.textContent;
            // 正则表达式用来判断{{}}里的属性名或函数名
            var reg = /\{\{(.*)\}\}/;
            // 判断是否为元素对象

            // ***  对元素节点的指令属性进行解析 ***

            if (me.isElementNode(node)) {
                // 调用编译元素节点函数
                me.compile(node);
            // 判断是否为文本节点并且符合正则表达式{{ name }}:专门编译大括号里的属性

            // ***  对大括号表达式文本节点进行解析 ***

            } else if (me.isTextNode(node) && reg.test(text)) {
                // 调用编译文本节点对象
                // RegExp.$1 = name 是属性的名字
                me.compileText(node, RegExp.$1);
            }
            // 判断节点对象中是否还有子节点并且长度不为0，如果有则递归调用
            if (node.childNodes && node.childNodes.length) {
                me.compileElement(node);
            }
        });
    },
    // 编译元素节点对象
    compile: function(node) {
        // 获取元素节点的属性节点
        var nodeAttrs = node.attributes,
            me = this;
        // 将属性节点转化为真数组遍历属性
        [].slice.call(nodeAttrs).forEach(function(attr) {
            // 获取属性节点的名
            var attrName = attr.name;
            if (me.isDirective(attrName)) {
                var exp = attr.value; // 获取属性的值 v-text="show" // show
                var dir = attrName.substring(2); // 截取属性名
                // 事件指令
                if (me.isEventDirective(dir)) {
                    compileUtil.eventHandler(node, me.$vm, exp, dir); // exp:vm对象methods的方法名 dir：事件名，如click
                    // 普通指令
                } else {
                    compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
                }
                // 渲染完后删除指令
                node.removeAttribute(attrName);
            }
        });
    },
    // 编译符合条件的文本节点函数
    compileText: function(node, exp) { // node: 节点对象 exp：是属性名 
        compileUtil.text(node, this.$vm, exp);
    },
    // 判断属性名是否包含v-的指令
    isDirective: function(attr) {
        return attr.indexOf('v-') == 0;
        // 要是==0，返回true，要是==-1，返回false
    },
    // 判断是否是为事件指令
    isEventDirective: function(dir) {
        return dir.indexOf('on') === 0;
    },

    isElementNode: function(node) {
        return node.nodeType == 1;
    },

    isTextNode: function(node) {
        return node.nodeType == 3;
    }
};

// 指令处理集合
var compileUtil = {
    // 文本
    text: function(node, vm, exp) {
        this.bind(node, vm, exp, 'text');
    },
    // DOM元素
    html: function(node, vm, exp) {
        this.bind(node, vm, exp, 'html');
    },
    // 模型绑定
    model: function(node, vm, exp) {
        this.bind(node, vm, exp, 'model');

        var me = this,
            val = this._getVMVal(vm, exp);
        node.addEventListener('input', function(e) {
            var newValue = e.target.value;
            if (val === newValue) {
                return;
            }

            me._setVMVal(vm, exp, newValue);
            val = newValue;
        });
    },
    // 类名
    class: function(node, vm, exp) {
        this.bind(node, vm, exp, 'class');
    },
    // 绑定
    bind: function(node, vm, exp, dir) { // dir是类型名：text/html/class/model
        // 通过dir获取类型所需要的调用的方法
        var updaterFn = updater[dir + 'Updater'];

        updaterFn && updaterFn(node, this._getVMVal(vm, exp));

        new Watcher(vm, exp, function(value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue);
        });
    },

    // 事件处理
    eventHandler: function(node, vm, exp, dir) {
        var eventType = dir.split(':')[1], // 获取事件类型
            fn = vm.$options.methods && vm.$options.methods[exp]; // 获取vm的methods对象的方法

        if (eventType && fn) {
            // 为事件绑定监听
            node.addEventListener(eventType, fn.bind(vm), false); // fn.bind(vm)：将函数的this指向vm对象，被他调用
        }
    },

    _getVMVal: function(vm, exp) {
        // 获取vm对象的data
        var val = vm._data;
        // 将字符串转化为数组
        exp = exp.split('.');
        // 遍历数组
        exp.forEach(function(k) {
            // 获取当前属性名的值
            val = val[k];
        });
        //返回属性值
        return val;
    },

    _setVMVal: function(vm, exp, value) {
        var val = vm._data;
        exp = exp.split('.');
        exp.forEach(function(k, i) {
            // 非最后一个key，更新val的值
            if (i < exp.length - 1) {
                val = val[k];
            } else {
                val[k] = value;
            }
        });
    }
};


var updater = {
    // 将数据里的值传入文本节点中
    textUpdater: function(node, value) { // node:节点 value:属性值
        node.textContent = typeof value == 'undefined' ? '' : value;
    },

    htmlUpdater: function(node, value) {
        node.innerHTML = typeof value == 'undefined' ? '' : value;
    },

    classUpdater: function(node, value, oldValue) {
        var className = node.className;
        className = className.replace(oldValue, '').replace(/\s$/, '');

        var space = className && String(value) ? ' ' : '';

        node.className = className + space + value;
    },

    modelUpdater: function(node, value, oldValue) {
        node.value = typeof value == 'undefined' ? '' : value;
    }
};