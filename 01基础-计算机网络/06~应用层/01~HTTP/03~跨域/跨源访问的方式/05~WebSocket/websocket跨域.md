Websocket 是 HTML5 的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案。Websocket 不受同源策略影响，只要服务器端支持，无需任何配置就支持跨域

```js
// 前端页面在 8080 的端口。
let socket = new WebSocket('ws://localhost:3000'); //协议是ws
socket.onopen = function() {
    socket.send('Hi,你好');
}
socket.onmessage = function(e) {
    console.log(e.data)
}

```

```js
// 服务端 3000端口。可以看出websocket无需做跨域配置
let WebSocket = require('ws');
let wss = new WebSocket.Server({port: 3000});
wss.on('connection', function(ws) {
    ws.on('message', function(data) {
        console.log(data); //接受到页面发来的消息'Hi,你好'
        ws.send('Hi'); //向页面发送消息
    });
});
```