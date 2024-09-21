// 给你一个数组，将其打乱，返回新的数组，即为数组乱序，也称为洗牌问题

// splice O(n^2)
function shuffle1(arr) {
  let rt = [];
  let _arr = [...arr];
  while (_arr.length) {
    let idx = ~~(Math.random() * _arr.length);
    rt.push(_arr[idx]);
    _arr.splice(idx, 1);
  }
  return rt;
}

// Fisher–Yates Shuffle
// 遍历数组元素，将其与之前的任意元素交换
// 遍历有从前向后和从后往前两种方式，所以该算法大致也有两个版本的实现
function shuffle2(arr) {
  let _arr = [...arr];
  for (let i = _arr.length - 1; i > 0; i--) {
    let j = ~~(Math.random() * i);
    [_arr[i], _arr[j]] = [_arr[j], _arr[i]];
  }
  return _arr;
}

let arr = [1, 3, 4, 5];
console.log(shuffle1(arr));
console.log(shuffle2(arr));
console.log(arr);
