function Foo() {}
Foo.prototype = {
  foo_prop: 'foo val'
};
function Bar() {}
let proto = {
  bar_prop: 'bar val',
  __proto__: Foo.prototype
};
Bar.prototype = proto;
Bar.prototype.constructor = Bar;

let inst = new Bar();
console.log(inst.foo_prop); // foo val
console.log(inst.bar_prop); // bar val
