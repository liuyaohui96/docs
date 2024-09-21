/*
通过在构造函数调用或者方法调用中使用 Something.cool.call( this )，我们实际上“借
用”了函数 Something.cool() 并在 Another 的上下文中调用了它

最终的结果是 Something.cool() 中的赋值操作都会应用在 Another 对象上而不是
Something 对象上
*/
var Something = {
  cool: function() {
    this.greeting = 'Hello World';
    this.count = this.count ? this.count + 1 : 1;
  }
};

Something.cool();
Something.greeting; // "Hello World"
Something.count; // 1
var Another = {
  cool: function() {
    // 隐式把 Something 混入 Another
    Something.cool.call(this);
  }
};
Another.cool();
Another.greeting; // "Hello World"
Another.count; // 1（count 不是共享状态）
