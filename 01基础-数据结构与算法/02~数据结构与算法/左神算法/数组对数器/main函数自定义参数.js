let generateRandomArray = require('./generateRandomArray');
let isEqual = require('./isEqual');
let rightFunction = require('./rightFunction');
let targetFunction = require('./targetFunction');

// 主程序测试
let testTime = 500000; // 5000 次测试
let size = 10;
let value = 100;
let flag = true;

for (let i = 0; i < testTime; i++) {
  let arr = generateRandomArray(size, value);
  let arr2 = [...arr];
  let arr3 = [...arr];

  rightFunction(arr2);
  targetFunction(arr3, 0, arr3.length - 1);

  if (!isEqual(arr2, arr3)) {
    flag = false;
    // 输出这个不符合的数组
    console.log(arr);
    break;
  }
}

console.log(flag ? 'good' : 'fuck you bitch');
