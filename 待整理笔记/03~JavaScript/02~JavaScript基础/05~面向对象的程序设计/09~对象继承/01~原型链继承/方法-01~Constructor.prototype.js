function Foo() {}
Foo.prototype = {
  foo_prop: 'foo val'
};
function Bar() {}
let foo = new Foo();
foo.bar_prop = 'bar val';

Bar.prototype = foo; // bar 的原型对象设置为foo的一个对象
Bar.prototype.constructor = Bar;
let bar = new Bar();
console.log(bar.foo_prop); // foo val
console.log(bar.bar_prop); // bar val
