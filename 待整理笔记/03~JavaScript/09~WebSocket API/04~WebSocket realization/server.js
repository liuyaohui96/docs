let WebSocketServer = require('ws').Server;
//用ws模块启动一个websocket服务器,监听3000端口
let wsServer = new WebSocketServer({ port: 3000 });
//监听客户端的连接请求  当客户端连接服务器的时候，就会触发connection事件
//socket代表一个客户端,不是所有客户端共享的，而是每个客户端都有一个socket
wsServer.on('connection', function(socket) {
  console.log('客户端连接成功');
  //监听客户端发来的消息
  socket.on('message', function(message) {
    console.log(message);
    socket.send('From server: Hi!');
  });
});
