function findLongestWordLength(str) {
  //将字符串转化为数组
  let arr = str.split(' ');
  if (arr.length == 1) return arr[0].length;

  if (arr[0].length > arr[1].length) {
    // 第二个元素小，删除第二个元素,继续递归
    arr.splice(1, 1);
    // 传递空格分割的字符串
    return findLongestWordLength(arr.join(' '));
  } else {
    // 第二个元素以后的数组，并将它转换为空格分割的字符串
    return findLongestWordLength(arr.slice(1, arr.length).join(' '));
  }
}
