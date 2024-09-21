
## ajax方法-$.getJSON & $.getScript
1. $.getJSON()
2. $.getScript()

## $.getJSON()
使用http get 方法向服务发起get请求获取JSON数据
```js
// data 发送到服务器的请求附加的数据
// 回调函数中的
  // data参数是响应返回的结果，
  // status 是 "success", "notmodified", "error", "timeout", or "parsererror"
  // xhr 包含XMLHttpRequest object
$(selector).getJSON(url,data,function(data,status,xhr))
```

## $.getScript()  
使用http get 方法向服务发起get请求获取和执行脚本
```js
// data 发送到服务器的请求附加的数据
// 回调函数中的
  // data参数是响应返回的结果，
  // status 是 "success", "notmodified", "error", "timeout", or "parsererror"
$(selector).getScript(url,success(response,status))
```