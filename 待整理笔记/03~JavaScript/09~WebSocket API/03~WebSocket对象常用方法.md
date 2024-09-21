
## WebSocket 对象常用方法
1. WebSocket.close()
2. WebSocket.send()

## WebSocket.close()
WebSocket.close() 关闭 WebSocket 连接

## WebSocket.send()
WebSocket.send() 将数据通过WebSocket连接传输到对应的服务器

方法需要的参数是data，值可能是：
* USVString 文本字符串
* ArrayBuffer & ArrayBufferView
* Blob
```js
WebSocket.send(data)
```