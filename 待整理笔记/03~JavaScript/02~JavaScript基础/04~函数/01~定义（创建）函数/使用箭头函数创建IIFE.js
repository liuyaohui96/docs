// === IIFE
// IIFE（immediately-invoked function expressions) 允许创建一个匿名的，隔离作用域的，立即调用的函数
let person = (function(name) {
  return {
    getName: function() {
      return name;
    }
  };
})('liuyaohui');

console.log(person.getName()); // "liuyaohui"

// 使用箭头函数可以完成同样的工作
let person = (name => {
  return {
    getName: function() {
      return name;
    }
  };
})('liuyaohui');

console.log(person.getName()); // "liuyaohui"
