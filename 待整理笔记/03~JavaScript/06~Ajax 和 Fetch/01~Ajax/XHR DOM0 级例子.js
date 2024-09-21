xhr.open('get', 'eaample.txt', true);
xhr.send(null);
xhr.onreadystatechange = function() {
  // 通信成功时，状态值为4
  if (
    xmlHttp.readyState == 1 ||
    xmlHttp.readyState == 2 ||
    xmlHttp.readyState == 3
  ) {
    // 本地提示：加载中...
  } else if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      // 返回结果
      console.log(xhr.responseText);
    } else {
      // 返回错误信息
      console.error(xhr.statusText);
    }
  }
};

xhr.onerror = function(e) {
  console.error(xhr.statusText);
};

//  === 在接收到响应前，还可以调用abort()方法来取消异步请求
// xhr对象停止触发后，还需要对xhr对象进行解除引用的操作，不建议重用xhr对象
xhr.abort();
