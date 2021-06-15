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