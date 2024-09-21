/**
 * @description sum all odd fibonacci number
 * @argument {number} num
 * @return {num} sum
 */

// 1, 1, 2, 3, 5, 8, 13...

function getSumOfOddfib(num) {
  let rt = 0;
  let current = 1;
  let previous = 0;
  while (current <= num) {
    if (current % 2 === 0) rt += current;
    current += previous;
    previous = current - previous;
  }
  return rt;
}

// 或者得到所有fabonacci的偶数后再相加
console.log(getSumOfOddfib(10));
