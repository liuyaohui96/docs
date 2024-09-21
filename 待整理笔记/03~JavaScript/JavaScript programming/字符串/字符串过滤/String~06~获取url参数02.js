/* 
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组 
*/

function getUrlParam(sUrl, sKey) {
  var param = sUrl.split('#')[0].split('?')[1];
  if (sKey) {
    //指定参数名称
    var strs = param.split('&');
    var arrs = new Array(); //如果存在多个同名参数，则返回数组
    for (var i = 0, len = strs.length; i < len; i++) {
      var tmp = strs[i].split('=');
      if (tmp[0] == sKey) {
        arrs.push(tmp[1]);
      }
    }
    if (arrs.length == 1) {
      //返回该参数的值或者空字符串
      return arrs[0];
    } else if (arrs.length == 0) {
      return '';
    } else {
      return arrs;
    }
  } else {
    //不指定参数名称，返回全部的参数对象 或者 {}
    if (param == undefined || param == '') {
      return {};
    } else {
      var strs = param.split('&');
      var arrObj = new Object();
      for (var i = 0, len = strs.length; i < len; i++) {
        var tmp = strs[i].split('=');
        if (!(tmp[0] in arrObj)) {
          arrObj[tmp[0]] = [];
        }
        arrObj[tmp[0]].push(tmp[1]);
      }
      return arrObj;
    }
  }
}
console.log(
  getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe')
);
