
## WebSocket 握手
握手是WebSockets是从HTTP到WS的桥梁。 在握手过程中，有关连接的详细信息正在初始化中，如果条件不利，任何一方可以在完成之前退出。 服务器必须小心了解客户要求的一切，否则会产生安全问题。

1. 客户端握手请求
2. 服务器握手响应

## 客户端握手请求
客户端仍然必须启动WebSocket握手过程
```shell
# HTTP版本必须是1.1或更高，方法必须是GET
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

## 服务器握手响应
服务器收到握手请求时，它应该发回一个特殊的响应，表明协议将从HTTP变为WebSocket
```shell
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```
