function Foo() {
  var i = 0;
  return function() {
    console.log(i++);
  };
}

var f1 = Foo(),
  f2 = Foo();
f1();
f1();
f2();
