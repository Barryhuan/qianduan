/*
  ~ export语句输出的接口，与其对应的值是动态绑定关系
  ~ 通过该接口，可以取到模块内部实时的值
  ~ CommonJS模块输出的是值的缓存，不存在动态更新
*/

export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);

//~ 上面代码输出变量foo，值为bar，500 毫秒之后变成baz