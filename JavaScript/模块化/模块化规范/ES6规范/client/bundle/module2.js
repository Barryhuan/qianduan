'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 统一暴露
function f3() {
    console.log('我是module2的f3');
}

function f4() {
    console.log('我是module2的f4');
}

exports.f3 = f3;
exports.f4 = f4;