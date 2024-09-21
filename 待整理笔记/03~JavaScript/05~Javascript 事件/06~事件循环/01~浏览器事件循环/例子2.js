// 输出： 2 4 3 1
setTimeout(() => {
  console.log(1);
}, 0);

new Promise((resolve, reject) => {
  console.log('2');
  resolve();
}).then(() => {
  console.log(3);
});

console.log(4);
