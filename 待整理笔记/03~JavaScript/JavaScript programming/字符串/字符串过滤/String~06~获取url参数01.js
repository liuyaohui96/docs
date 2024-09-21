/* 
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组 
*/

function getUrlParam(sUrl, sKey) {
  // path字符串
  let pathStr = sUrl.split('#')[0].split('?')[1];
  let arr = pathStr.split('&');

  // 不指定sKey参数名称
  if (sKey) {
    let returnArr = [];
    arr.forEach(item => {
      let temp = item.split('=');
      if (temp[0] === sKey) {
        returnArr.push(temp[1]);
      }
    }); // forEach end

    if (returnArr.length === 1) {
      return returnArr[0];
    } else if (returnArr.length === 0) {
      return '';
    } else {
      return returnArr;
    }
  } else {
    if (pathStr == undefined || pathStr == '') {
      return {};
    }
    // 返回全部的参数对象 或者 {}
    let returnObj = {};
    arr.forEach(item => {
      let temp = item.split('=');
      if (!(temp[0] in returnObj)) returnObj[temp[0]] = [];
      returnObj[temp[0]].push(temp[1]);
    });
    return returnObj;
  }
}
console.log(
  getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe')
);
