function Foo() {}
/*任何函数都是Function的实例 ，包括它本身*/
console.log(Object instanceof Function); // true
console.log(Function instanceof Function); // true
console.log(Foo instanceof Function); // true

// Function.__proto__ === Object.prototype
console.log(Function instanceof Object); // true

// Object.__proto__ === Function.prototype
// Function.prototype.__proto__ === Object.prototype
console.log(Object instanceof Object); // true

console.log(Object instanceof Foo); // false
