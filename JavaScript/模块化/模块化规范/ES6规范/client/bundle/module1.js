'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.f1 = f1;
exports.f2 = f2;
// 分别暴露
function f1() {
    console.log('我是module1的f1');
}

function f2() {
    console.log('我的module1的f2');
}

var arr = exports.arr = [1, 2, 3, 4, 5];