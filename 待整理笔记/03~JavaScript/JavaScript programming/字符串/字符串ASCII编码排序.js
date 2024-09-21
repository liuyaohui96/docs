function asciiSort(str) {
  let rt = [];
  str.split('').forEach(char => {
    rt.push(char.charCodeAt());
  });
  rt.sort((a, b) => b - a);
  return rt;
}

let str = 'hello world';
console.log(asciiSort(str));
console.log(asciiSort2(str));
// [ 119, 114, 111, 111, 108, 108, 108, 104, 101, 100, 32 ]

// 更好的方法
function asciiSort2(str) {
  return str
    .split('')
    .map(char => char.charCodeAt())
    .sort((a, b) => b - a);
}
