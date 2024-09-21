
## WebSocket
WebSocket API用于创建和管理与服务器的WebSocket连接，以及用于在连接上发送和接收数据

使用WebsocketAPI，您可以将消息发送到服务器并接收事件驱动的响应，而不必轮询服务器以获取答复。

WebSocket的特点：
* 支持双向通信，实时性更强
* 可以发送文本，也可以发送二进制数据
* 减少通信量：只要建立起WebSocket连接，就一直保持连接状态，由于WebSocket的header信息很小，通信量也相应减少了


## WebSocket 对象构造函数
WebSocket 对象构造函数所需参数：
* 必须的URL：要连接的服务器的URL
* 可选的protocol：用于指定子协议的字符串，这样单个服务器可以实现多个WebSocket子协议。如果不指定协议字符串，则假定为空字符串。
```js
let aWebSocket = new WebSocket(url [, protocols]);

// === 例子
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
```


客户端仍然必须启动WebSocket握手过程
```shell
# 发起websocket的请求头多了两个请求头部
Upgrader: websocket
Connection: Upgrade
```

## 接口
1. WebSocket：连接到WebSocket服务器，然后在连接上发送和接收数据的主要接口
2. CloseEvent：连接关闭时WebSocket对象发送的事件。
3. MessageEvent: 从服务器收到消息时，WebSocket对象发送的事件