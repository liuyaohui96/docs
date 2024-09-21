function Foo() {}
Foo.prototype = {
  foo_prop: 'foo val'
};

function Bar() {}
let proto = Object.create(Foo.prototype, {
  bar_prop: {
    value: 'bar val'
  }
});
Bar.prototype = proto;
Bar.prototype.constructor = Bar;

let inst = new Bar();
console.log(inst.foo_prop); // foo val
console.log(inst.bar_prop); // bar val

// ===
let obj = {
  foo: 'bar'
};
let anotherObj = Object.create(obj, {
  name: 'liuyaohui'
});
anotherObj.foo; // 'bar'
anotherObj.name; //'liuyaohuis'
