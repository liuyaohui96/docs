/**
 * @description sum all primer number
 * @argument {number} num
 * @return the sum of all primer number
 */

let sum = 977;

function sumAllPrimer(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrimer(i)) sum += i;
  }
  function isPrimer(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  return sum;
}

console.log(sumAllPrimer(977));
