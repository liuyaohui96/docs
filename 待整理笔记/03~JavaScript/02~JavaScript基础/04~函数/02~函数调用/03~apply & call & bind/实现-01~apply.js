// 简单版
Function.prototype._apply = function(context, argArr) {
  context.fn = this;
  return context.fn(...argArr);
};

// 复杂版
Function.prototype.apply = function(context, rest) {
  if (!context) {
    //context为null或者是undefined时,设置默认值
    context = typeof window === 'undefined' ? global : window;
  }
  context.fn = this;
  let result;
  if (rest === undefined || rest === null) {
    //undefined 或者 是 null 不是 Iterator 对象，不能被 ...
    result = context.fn(rest);
  } else if (typeof rest === 'object') {
    result = context.fn(...rest);
  }
  delete context.fn;
  return result;
};

// === 测试
var foo = {
  name: 'Selina'
};
var name = 'Chirs';
function bar(job, age) {
  console.log(this.name);
  console.log(job, age);
}
bar.apply(foo, ['programmer', 20]); // Selina programmer 20
bar.apply(null, ['teacher', 25]); // 浏览器环境: Chirs programmer 20; node 环境: undefined teacher 25
bar._apply(foo, ['programmer', 20]); // Selina programmer 20
