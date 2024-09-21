/*
依次输出： 4 1 3 2
*/

setTimeout(() => {
  // 构造器内的非异步代码同步执行
  new Promise((resolve, reject) => {
    console.log(1);
    resolve();
  }).then(() => {
    console.log(2);
  });
  console.log(3);
}, 0);

console.log(4);
