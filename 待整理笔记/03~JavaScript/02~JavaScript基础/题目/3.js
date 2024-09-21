;(function() {
  var a = (b = 3)
})()

console.log(typeof a === 'undefined') // true
console.log(typeof b === 'undefined') // false

// 这里涉及的就是立即执行和闭包的问题,还有变量提升,运算符执行方向(=号自左向右)
// 那个函数可以拆成这样
