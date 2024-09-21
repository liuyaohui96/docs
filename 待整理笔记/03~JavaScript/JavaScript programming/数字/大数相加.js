/**
 * @param {String} str1
 * @param {String} str2
 */
function add(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let len = len1 > len2 ? len1 : len2; // 获取其中的最大长度

  //补足位数
  if (len1 > len2) {
    for (let i = 0; i < len1 - len2; i++) str2 = '0' + str2;
  } else {
    for (let i = 0; i < len2 - len1; i++) str1 = '0' + str1;
  }

  // 将字符串转换为数组,然后reverse
  let arr1 = str1.split('').reverse();
  let arr2 = str2.split('').reverse();
  // 加法运算
  let lastNum = 0;
  let arr = [];
  for (let i = 0; i < len; i++) {
    // 需要将字符串转换为数字再计算
    let temp = Number(arr1[i]) + Number(arr2[i]) + lastNum;
    arr[i] = temp >= 10 ? temp - 10 : temp;
    lastNum = temp >= 10 ? 1 : 0;
  }

  if (lastNum == 1) arr[len] = 1;

  return arr.reverse().join('');
}

let result = add('123', '12');
console.log(result);
