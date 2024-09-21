
## 类
其他对面对象程序语言中，一个类就是一张蓝图。为了获得真正对象，必须使用类来进行实例化。有需要的话，可以直接在实例上调用方法并访问其所有公有数据属性。JavaScript 中只有对象，并不存在可以被实例化的“类”。

ES5前与与类工作方式最接近的方式是：
1. 创建一个构造器函数
2. 将方法定义在构造器的原型上
```js
function PersonType(name) {
  this.name = name;
}

PersonType.prototype.sayName = function() {
  console.log(this.name);
};

let person = new PersonType('liu');
person.sayName(); // outputs "liu"

console.log(person instanceof PersonType); // true
console.log(person instanceof Object); // true
```


在相当长的一段时间里，JavaScript 只有一些近似类的语法元素（比如 new 和 instanceof）,ES6 中新增了如 class 关键字, 但是javascript实际上是没有类的，class 是`[[Prototype]]`（委托）机制的一种语法糖。