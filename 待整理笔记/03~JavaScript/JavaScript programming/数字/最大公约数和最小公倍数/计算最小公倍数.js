/**
 * @description get Smallest-Common-Multiple of two number
 * @argument {number} num1
 * @argument {number} num2
 * @return Smallest-Common-Multiple
 */

function getScm(num1, num2) {
  // gcd 最大公约数
  function getGcd(a, b) {
    while (b != 0) {
      let c = a % b;
      a = b;
      b = c;
    }
    return a;
    s;
  }
  return (num1 * num2) / getGcd(num1, num2);
}

console.log(getScm(2, 3));
console.log(getScm(25, 30));
