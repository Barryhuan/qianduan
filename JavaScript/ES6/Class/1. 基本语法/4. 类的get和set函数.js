// 在类的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为

class A {
  get prop() {
    console.log('获取prop属性')
  }
  set prop(value) {
    console.log('设置prop属性的值为：' + value)
  }
}

let a = new A()

a.prop = '123' // 设置prop属性的值为：123

a.prop // 获取prop属性

a.hasOwnProperty('prop') // false
a.__proto__.hasOwnProperty('prop') // true

// 这样定义的属性是定义在类的原型上的

// 存值函数和取值函数是设置在属性的 Descriptor 对象上的
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype, "html"
);

"get" in descriptor  // true
"set" in descriptor  // true