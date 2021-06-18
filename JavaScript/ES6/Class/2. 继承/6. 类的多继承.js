function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }

  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== 'constructor'
      && key !== 'prototype'
      && key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}

class A {
  all() {
    console.log('妈卖批1')
  }
}
class B {
  all1() {
    console.log('妈卖批2')
  }
}

class All extends mix(A, B) {
  all2() {
    console.log('妈卖批3')
  }
}

let all = new All()
all.all() // 妈卖批1
all.all1() // 妈卖批2
all.all2() // 妈卖批3
