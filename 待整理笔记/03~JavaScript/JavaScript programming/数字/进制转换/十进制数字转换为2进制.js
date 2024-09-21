function decimalToBinary(num) {
  return Number.parseInt(num.toString(2));
}

/* num/2大于0就将它放进数组的最前面，转换后输出 */
/* num/2大于0就将它放进数组的后面，反置数组，转换后输出 */
function decimalToBinary2(num) {
  let result = [];
  while (num / 2 > 0) {
    result.unshift(num % 2);

    num = Number.parseInt(num / 2);
  }
  return Number.parseInt(result.join(""));
}

let result = decimalToBinary(8);
console.log(typeof result); // 1000
