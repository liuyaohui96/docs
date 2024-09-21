
## XMLHttpRequest对象常用属性
1. XMLHttpRequest.readyState：返回请求当前的状态
    * 0：UNSENT 尚未初始化，尚未调用open方法
    * 1：OPENED 启动，已经调用open方法，但尚未调用send方法
    * 2：HEADERS_RECEIVED 发送，已经调用send方法，头部和状态已经可获得
    * 3：LOADING 下载中，接收，responseText 属性已经包含部分数据
    * 4：DONE 完成，已经接受全部的响应数据，可以在客户端上使用

2. XMLHttpRequest.responseText：响应主体返回的 DOMString文本，如果请求未成功或尚未发送，则返回 null。

3. XMLHttpRequest.status 返回一个 DOMString表示服务器返回的响应状态。需要检验这两个状态码为成功接受响应
    * status 为200表示成功
    * 304表示请求资源没有被修改，为了确保成功收到响应
    
4. XMLHttpRequest.statusText  返回一个 DOMString表示服务器返回的响应状态文本


5. XMLHttpRequest.timeout 整数值，表示该请求的最大请求时间（毫秒），若超出该时间，则请求会自动结束。默认值为 0，意味着没有超时





