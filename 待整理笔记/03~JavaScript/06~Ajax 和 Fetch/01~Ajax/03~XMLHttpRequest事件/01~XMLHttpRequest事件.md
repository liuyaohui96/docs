
## XMLHttpRequest事件
* abort：当一个请求终止时 abort 事件被触发，例如调用XMLHttpRequest.abort()。也可以使用 onabort 属性
* error：当request遭遇错误时触发。也可以使用 onerror 属性
* onreadystatechange：只要 readyState 属性发生变化时触发。当一个 XMLHttpRequest 请求被 abort() 方法取消时，其对应的 readystatechange 事件不会被触发
* load：XMLHttpRequest请求成功完成时触发。 为了简化XHR异步交互模型，引入load事件，替代readystatechange事件。也可以使用 onload 属性.
* progress: 请求收到更多数据时定期触发
* timeout：在预设时间内没有接收到响应时触发。也可以使用 ontimeout 属性。


```js
let xhr = new XMLHttpRequest();
xhr.addEventListener("progress", updateProgress);
xhr.addEventListener("load", transferComplete);
xhr.addEventListener("error", transferFailed);
xhr.addEventListener("abort", transferCanceled);

XMLHttpRequest.onreadystatechange = callback;
XMLHttpRequest.addEventListener('readystatechange', callback);
/* === 例子*/
xhr.onload = function(){
  if ((xhr.status >= 200 && xhr.status<300)|| xhr.status==304){
      // 返回结果
      console.log(xhr.responseText);
    } else {
      // 返回错误信息
      console.error(xhr.statusText);
  }
}

/* === 引入progress事件
在浏览器接收新数据期间周期性触发， 该事件处理程序的接收一个event对象，
其target属性是XHR对象，还包含了以下三个属性：
1. lengthComputable 表示进度信息是否可用的boolean值
2. posiiton 表示已经接收到的字节数
3. totalSize 表示根据Content-length 响应头确定的预期的字节数
*/
xhr.onprogress = function(event){
  if(event.lengthComputable){
    console.log(event.position/event.totalSize);
  }
}
```