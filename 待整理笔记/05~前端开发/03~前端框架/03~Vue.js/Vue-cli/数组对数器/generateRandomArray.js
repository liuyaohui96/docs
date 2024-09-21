function generateRandomArray(size, value) {
  // 生成长度随机的数组
  let arr = new Array(Math.floor((size + 1) * Math.random()));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor((value + 1) * Math.random());
    Math.floor(value * Math.random());
  }
  return arr;
}

module.exports = generateRandomArray;
