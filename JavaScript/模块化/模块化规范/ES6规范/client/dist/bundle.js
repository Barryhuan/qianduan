(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.f1)();
(0, _module.f2)();
(0, _module2.f3)();
(0, _module2.f4)();
console.log(_module4.default.getName());
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}]},{},[1]);
