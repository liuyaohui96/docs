## super 的静态
出于性能考虑（this 绑定已经是很大的开销了），super 并不是动态绑定的，它会在声明时“静态”绑定
```js
class P {
foo() { console.log( "P.foo" ); }
}
class C extends P {
foo() {
super();
}
}
var c1 = new C();
c1.foo(); // "P.foo"
var D = {
foo: function() { console.log( "D.foo" ); }
};
var E = {
foo: C.prototype.foo
};
// 把 E 委托到 D
Object.setPrototypeOf( E, D );
E.foo(); // "P.foo"
```
super 并不像 this 一样是晚绑定,它在 [[HomeObject]].[[Prototype]] 上，[[HomeObject]] 会在创建时静态绑定

可以手动修改 super 绑定，使用 toMethod(..) 绑定或重新绑定方法的 [[HomeObject]]
```js
var D = {
foo: function() { console.log( "D.foo" ); }
};
// 把 E 委托到 D
var E = Object.create( D );
// 手动把 foo 的 [[HomeObject]] 绑定到 E，E.[[Prototype]] 是 D，所以 super() 是 D.foo()
E.foo = C.prototype.foo.toMethod( E, "foo" );
E.foo(); // "D.foo"
```