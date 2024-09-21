// 对于事件处理程序，this默认绑定到事件的目标对象上，如果需要修改this上下文，就要通过显示绑定this
var PageHandler = {
  id: '123456',
  init: function() {
    document.addEventListener(
      'click',
      function(event) {
        this.doSomething(event.type); // no error
      }.bind(this),
      false
    );
  },
  doSomething: function(type) {
    console.log('Handling ' + type + ' for ' + this.id);
  }
};

// === 通过箭头函数可以简单达到目的
// 箭头函数的this包含在非箭头函数内，this值与该包含函数相等
var PageHandler = {
  id: '123456',
  init: function() {
    document.addEventListener(
      'click',
      event => this.doSomething(event.type),
      false
    );
  },
  doSomething: function(type) {
    console.log('Handling ' + type + ' for ' + this.id);
  }
};
