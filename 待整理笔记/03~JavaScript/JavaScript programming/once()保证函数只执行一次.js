//  传入一个函数作为参数，保证函数只执行一次
// 个人想法

let isExec = false;

function execFunc(func, ...args) {
  if (!isExec) return func(...args);
  else return -1;
}

function sum(x, y) {
  return x + y;
}

console.log(execFunc(sum, 4, 5));
