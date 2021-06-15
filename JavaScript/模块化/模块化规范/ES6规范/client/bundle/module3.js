'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 默认暴露，可以是任何类型，最好骗是对象，但只能有一个
exports.default = {
    name: '老王',
    getName: function getName() {
        return this.name;
    }
};