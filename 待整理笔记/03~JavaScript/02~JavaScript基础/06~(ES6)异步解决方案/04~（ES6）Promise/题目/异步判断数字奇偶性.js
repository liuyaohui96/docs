let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.floor(Math.random() * 100); // 0 - 100的整数
    if (num % 2 === 0) resolve(num);
    else reject(num);
  }, 2000);
});

promise
  .then(num => {
    console.log('resolve ' + num + '是偶数');
  })
  .catch(num => {
    console.log('rejec t' + num + '是奇数');
  });
