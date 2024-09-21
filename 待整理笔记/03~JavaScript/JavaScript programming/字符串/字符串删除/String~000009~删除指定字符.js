// 去除字符串中最后一个指定的字符
function delLast(str, target) {
  let idx = str.indexOf(target);
  return str.substring(0, idx) + str.substring(idx + 1);
}

let str = 'asdfghhj';
console.log(delLast(str, 'h'));
