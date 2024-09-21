class P {
  foo() {
    console.log('P.foo');
  }
}
class C extends P {
  foo() {
    super();
  }
}
var c1 = new C();
c1.foo(); // "P.foo"
var D = {
  foo: function() {
    console.log('D.foo');
  }
};
var E = {
  foo: C.prototype.foo
};
// 把 E 委托到 D
Object.setPrototypeOf(E, D);
E.foo(); // "P.foo"
