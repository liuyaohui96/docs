
## Connection & Upgrade 实现协议升级
协议升级请求总是由客户端发起的，需要在请求header中添加两项额外的header

```shell
# 设置 Connection 头的值为 "Upgrade" 来指示这是一个升级请求.
Connection: Upgrade
# Upgrade 头指定一项或多项协议名，按优先级排序，以逗号分隔
Upgrade: <protocols>
```

如果服务器决定升级这次连接，就会返回一个`101 Switching Protocols` 响应状态码，和一个要切换到的协议的头部字段Upgrade。服务在发送 101 状态码之后，就可以使用新的协议，并可以根据需要执行任何其他协议指定的握手

如果服务器没有（或者不能）升级这次连接，它会忽略客户端发送的 "Upgrade 头部字段，返回一个常规的响应：例如一个`200 OK`)



## 升级到HTTP / 2连接
只能升级到不安全的（明文）HTTP / 2连接，使用目标协议名称h2c（代表“ HTTP/2 Cleartext”）完成此操作。还需要指定HTTP2-Settings头字段，这里，base64EncodedSettings是`HTTP / 2“ SETTINGS”`帧的有效负载，已经对其进行了base64url编码，并删除了所有尾随的“ =”（等于）字符，以便将其安全地包含在此文本标头格式中
```shell
# === 例子
GET / HTTP/1.1
Host: destination.server.ext
Connection: Upgrade, HTTP2-Settings
Upgrade: h2c
HTTP2-Settings: base64EncodedSettings

# === 返回响应例子
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Upgrade: h2c

[standard HTTP/2 server connection preface, etc.]
```

## 升级到WebSocket连接
```shell
# 请求头部举例
connection: Upgrade;
upgrade: websocket;

# 如果服务器支持websocket，则允许客户端连接
# 在响应头部信息中返回
connection: Upgrade;
upgrade: websocket;
```