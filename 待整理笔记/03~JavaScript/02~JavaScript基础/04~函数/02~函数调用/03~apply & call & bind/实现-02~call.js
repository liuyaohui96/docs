Function.prototype.call = function(context, ...rest) {
  /**
   * 如果第一个参数传入的是 null 或者是 undefined,
   * 那么指向this指向 window/global
   * */
  /**
   * 如果第一个参数传入的不是null或者是undefined,
   * 那么必须是一个对象 */
  if (!context) {
    //context为null或者是undefined
    context = typeof window === 'undefined' ? global : window;
  }
  context.fn = this; //this指向的是当前的函数(Function的实例)
  let result = context.fn(...rest); //隐式绑定,当前函数的this指向了context.
  delete context.fn;
  return result;
};

// === 测试代码
var foo = {
  name: 'Selina'
};
var name = 'Chirs';
function bar(job, age) {
  console.log(this.name);
  console.log(job, age);
}
bar.call(foo, 'programmer', 20);
// Selina programmer 20
bar.call(null, 'teacher', 25);
// 浏览器环境: Chirs teacher 25; node 环境: undefined teacher 25
