function Foo() {
  getName = function() {
    console.log(1)
  }
  return this
}
Foo.getName = function() {
  console.log(2)
}
Foo.prototype.getName = function() {
  console.log(3)
}
var getName = function() {
  console.log(4)
}
function getName() {
  console.log(5)
}

Foo.getName() // 2
getName() // 4

// node 环境下因为global.getName对应的是undefined，不是一个function，会抛出错误
// Foo().getName()

// 相当于是 new (Foo.getName)();new操作符会执行构造函数中的方法，因此此处输出为 2
new Foo.getName() // 2

// 实例上没有getName方法，因此需要原型上去找，
// 即找到了 Foo.prototype.getName，输出3
new Foo().getName() // 3
new new Foo().getName() // 3
