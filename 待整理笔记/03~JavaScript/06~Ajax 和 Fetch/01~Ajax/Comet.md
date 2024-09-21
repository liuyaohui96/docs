
## Comet
Comet 是指更高级的Ajax技术，也称为服务器推送，Ajax是页面向服务器请求数据的技术，而Comet则是服务器向页面推送的技术

## 实现Comet的方式
1. 长轮询。长轮询是指页面发送一个服务器请求，服务器一直保持连接，直到有数据发送，发送完数据之后，浏览器关闭连接，随即又发起一个到服务器的新请求，这一过程，在页面打开期间一直持续不断。短轮询与长轮询最大的区别是长轮询等待发送响应。
2. 流，即HTTP流，页面的整个生命周期只使用一个HTTP连接，浏览器发送一个请求，而服务器保持连接打开，周期性向服务器发送数据。

## 实现Commet的两个接口
1. SSE

```js
// === 预定新的事件流, 传入一个作为入口点URL参数，
let source = new EventSource("myevents.php");

/* === 事件
open 建立连接时触发
message 从服务器接收到使劲按时触发
error 无法建立连接时候触发
*/
source.onmessage = function(event){
    var data = event.data;
}

// === 后续待编辑
```

2. websocket，服务器的更新可以及时推送到客户端，而不需要客户端以一定的时间间隔去轮询。详细参考HTML5 api -  websocket


## SSE 和 websockets选用因素
1. 是否有建立和维护websocket的服务器，web socket 协议不同于http，SSE可以通过常规HTTP进行通信
2. 是否需要双向通信，如果只是读取服务器数据，SSE实现比较容易，如果需要双向通信，则选用websocket