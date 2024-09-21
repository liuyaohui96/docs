// Person 构造函数
function Parent(name) {
  this.name = name;
  this.sayHi = function() {
    console.log('parent say hi---instance method');
  };
}
// Parent 原型链
Parent.prototype.sayName = function() {
  console.log('parent name', this.name);
};
Parent.prototype.sayHello = function() {
  console.log('parent say hello ---prototype method');
};

function Child(name) {
  this.name = name;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child; // important
Child.prototype.sayName = function() {
  console.log('child name', this.name);
};

let child = new Child('liuyaohiu');
child.sayName(); // child name liuyaohiu
child.sayHello(); // parent say hello---prototype method
child.sayHi(); // parent say hi---instance method
