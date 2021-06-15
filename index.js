console.log(Object.prototype) // {}
console.log(Function.prototype) // [Function]
console.log(Date.prototype) // Date {}
console.log(Array.prototype) // []
console.log(RegExp.prototype) // RegExp {}
console.log(String.prototype) // [String: '']
console.log(Number.prototype) // [Number: 0]
console.log(Boolean.prototype) // [Boolean: false]

console.log('---------------------------------------------------------------------')
console.log(Object.prototype.__proto__) // null
console.log(Function.prototype.__proto__) // {}
console.log(Array.prototype.__proto__) // {}
console.log(Date.prototype.__proto__) // {}
console.log(RegExp.prototype.__proto__) // {}
console.log(String.prototype.__proto__) // {}
console.log(Number.prototype.__proto__)  // {}
console.log(Boolean.prototype.__proto__)  // {}

console.log('---------------------------------------------------------------------')
console.log(Object.prototype.__proto__) // null
console.log(Function.prototype.__proto__.__proto__) // null
console.log(Array.prototype.__proto__.__proto__) // null
console.log(Date.prototype.__proto__.__proto__) // null
console.log(RegExp.prototype.__proto__.__proto__) // null
console.log(String.prototype.__proto__.__proto__) // null
console.log(Number.prototype.__proto__.__proto__)  // null
console.log(Boolean.prototype.__proto__.__proto__)  // null

console.log('---------------------------------------------------------------------')
console.log(Object.__proto__) // [Function]
console.log(Function.__proto__)  // [Function]
console.log(Array.__proto__) // [Function]
console.log(Date.__proto__) // [Function]
console.log(RegExp.__proto__) // [Function]
console.log(String.__proto__) // [Function]
console.log(Number.__proto__)  // [Function]
console.log(Boolean.__proto__)  // [Function]

console.log('---------------------------------------------------------------------')
console.log(Object.__proto__.__proto__) // {}
console.log(Function.__proto__.__proto__) // {}
console.log(Array.__proto__.__proto__) // {}
console.log(Date.__proto__.__proto__) // {}
console.log(RegExp.__proto__.__proto__) // {}
console.log(String.__proto__.__proto__) // {}
console.log(Number.__proto__.__proto__)  // {}
console.log(Boolean.__proto__.__proto__) // {}

console.log('---------------------------------------------------------------------')
console.log(Object.__proto__.__proto__.__proto__)  // null
console.log(Function.__proto__.__proto__.__proto__) // null
console.log(Array.__proto__.__proto__.__proto__) // null
console.log(Date.__proto__.__proto__.__proto__) // null
console.log(RegExp.__proto__.__proto__.__proto__) // null
console.log(String.__proto__.__proto__.__proto__) // null
console.log(Number.__proto__.__proto__.__proto__)  // null
console.log(Boolean.__proto__.__proto__.__proto__) // null

console.log('---------------------------------------------------------------------')
