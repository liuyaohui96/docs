// 非常简单的 mixin(..) 例子
/*
通过mixin：Car 中就有了一份 Vehicle 属性和函数的副本，技术角度来说，函数实际上没有
被复制，复制的是函数引用。相反，属性 engines 就是直接从 Vehicle 中复制了值 1

由于 Car 和Vehicle 中都有 drive() 函数，为了指明调用对象，我们必须使用绝对（而不是相对）引
用。我们通过名称显式指定 Vehicle 对象并调用它的 drive() 函数

如果直接执行 Vehicle.drive()，函数调用中的 this 会被绑定到 Vehicle 对象而不是
Car 对象（参见第 2 章），这并不是我们想要的。因此，我们会使用 .call(this)来确保 drive() 在 Car 对象的上下文中执行

缺点：显式伪多态会在所有需要使用（伪）多态引用的地方创建一个函数关联，
这会极大地增加维护成本
*/
function mixin(sourceObj, targetObj) {
  for (var key in sourceObj) {
    // 只会在不存在的情况下复制
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
}
var Vehicle = {
  engines: 1,
  ignition: function() {
    console.log('Turning on my engine.');
  },
  drive: function() {
    this.ignition();
    console.log('Steering and moving forward!');
  }
};
var Car = mixin(Vehicle, {
  wheels: 4,
  drive: function() {
    Vehicle.drive.call(this);
    console.log('Rolling on all ' + this.wheels + ' wheels!');
  }
});
