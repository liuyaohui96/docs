// === var 声明的变量在每次迭代都被共享，意味着创建的函数拥有对同一变量的共享
var funcs = [];
for (var i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}
funcs.forEach(function(func) {
  func(); // outputs the number "10" ten times
});

// === ES6前使用IIFE解决这个问题，借助IIFE函数参数保存值
var funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(
    (function(value) {
      return function() {
        console.log(value);
      };
    })(i)
  );
}

funcs.forEach(function(func) {
  func(); // outputs 0, then 1, then 2, up to 9
});

// === ES6后使用块级声明就可以在循环中保存函数参数值
var funcs = [];
for (let i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}
funcs.forEach(function(func) {
  func(); // outputs 0, then 1, then 2, up to 9
});
