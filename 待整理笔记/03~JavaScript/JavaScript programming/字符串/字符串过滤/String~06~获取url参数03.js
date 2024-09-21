// 模拟浏览器获取查询字符串
let location = {};
location.search = '?id=5&name=liuyaohui';

function getSearchObj(str) {
  let result = {};
  str = str.substring(1);
  // 根据&分隔为数组
  let arr = str.split('&');

  arr.forEach(item => {
    let idx = item.indexOf('='); // = 号的index
    result[item.substring(0, idx)] = item.substring(idx + 1);
  });
  return result;
}

console.log(getSearchObj(location.search));
