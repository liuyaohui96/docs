// es7 解决方法
// 模拟其他语言中的 sleep，实际上可以是任何异步操作
const sleep = timeountMS =>
  new Promise(resolve => {
    setTimeout(resolve, timeountMS);
  });

(async () => {
  // 声明即执行的 async 函数表达式
  for (var i = 0; i < 5; i++) {
    await sleep(1000);
    console.log(new Date(), i);
  }

  await sleep(1000);
  console.log(new Date(), i);
})();
