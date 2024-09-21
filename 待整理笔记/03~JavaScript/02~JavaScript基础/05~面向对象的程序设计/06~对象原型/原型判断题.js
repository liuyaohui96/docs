let obj = {};
obj.__proto__ === Object.prototype; // true

Object.getPrototypeOf(Object.prototype); // null

function Person(name) {
  this.name = name;
}
let p = new Person('Tom');
p.__proto__ === Person.prototype; // true
P.__proto__ === Function.prototype; // true
