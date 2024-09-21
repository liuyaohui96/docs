
## 创建 WebSocket 对象
为了使用 WebSocket 协议通信，需要使用WebSocket API中的构造函数创建一个 WebSocket 对象；这将会自动地尝试建立与服务器的连接。
```js
// === 例子
// 创建了一个新的 WebSocket，连接到地址为 ws://www.example.com/socketserver 的服务器
// 命名了一个自定义的协议 "protocolOne"，这一部分可以省略
let exampleSocket = new WebSocket("ws://www.example.com/socketserver", "protocolOne");

// 建立一个支持协议可选的连接，可以指定协议的列表
// 连接建立了，exampleSocket.protocol 指示服务器选择了哪个协议
let exampleSocket = new WebSocket("ws://www.example.com/socketserver", ["protocolOne", "protocolTwo"]);
```
