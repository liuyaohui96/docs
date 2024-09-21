
## 过程方法
1. $.ajaxStart(func) AJAX请求开始时运行指定函数
2. $.ajaxSend(func) AJAX请求开始前运行指定函数
3. $.ajaxSuccess() AJAX请求请求成功时运行指定的函数；ajaxComplete()不管失败与否，完成都会运行
4. $.ajaxError() AJAX请求请求失败时运行指定的函数
5. $.ajaxComplete() AJAX请求完成时运行指定的函数
6. $.ajaxStop(func) 所有AJAX请求完成时运行指定函数

```js
$(document).ajaxStart(function())
$(document).ajaxSend(function())
$(document).ajaxSuccess(function())
$(document).ajaxError(function())
$(document).ajaxComplete(function())
$(document).ajaxStop(function())
```
