
## WebSocket Event
* open 当打开与WebSocket的连接时触发
* message 通过WebSocket接收数据时触发
* error 当由于错误（例如无法发送某些数据）而关闭与WebSocket的连接时触发
* close 当关闭与WebSocket的连接时触发

```js
// === Connection opened
exampleSocket.addEventListener('open', (event) => {
  socket.send('Hello Server!');
});

// === Connection close
exampleSocket.addEventListener('close', (event) => {
  console.log('The connection has been closed successfully.');
)};

// === Listen for messages
exampleSocket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);
});

// === Listen for possible errors
exampleSocket.addEventListener('error', function (event) {
  console.log('WebSocket error: ', event);
});
```


