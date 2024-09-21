class Parent {
  // 相当于Parent()构造函数
  constructor(name) {
    this.name = name;
  }
  // 相当于Parent.prototype.sayName = function(){}
  sayName() {
    console.log(this.name);
  }
}

let p = new Parent('liu');
p.sayName(); // "liu"

console.log(p instanceof Parent); // true
console.log(p instanceof Object); // true
console.log(typeof Parent); // "function"
console.log(typeof Parent.prototype.sayName); // "function"
