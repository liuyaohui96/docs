// 类声明不会被提升，与`let`行为类似，程序在执行到声明之前，类会存在暂时性死区
let Parent = (function() {
  'use strict'; // 类声明语法自动运行在严格模式下
  // 在一个IIFE内部使用const声明构造函数，这样试图在类的方法内重写类名，会抛出错误，在类的外部重写是允许的。
  const Parent = function(name) {
    // 构造函数检查了new.target，不使用new调用类构造器，会抛出错误
    if (typeof new.target === 'undefined') {
      throw new Error('构造函数必须使用new调用');
    }
    this.name = name;
  };

  // 方法都是不可枚举的，而且被new调用要抛出错误
  Object.defineProperty(Parent.prototype, 'sayName', {
    value: function() {
      // 被new调用要抛出错误
      if (typeof new.target !== 'undefined') {
        throw new Error('方法不能使用new被调用');
      }

      console.log(this.name);
    },
    enumerable: false, // 方法都是不可枚举的
    writable: true,
    configurable: true
  });

  // 返回构造函数
  return Parent;
})();
