let express = require('express');
let app = express();
let WebSocket = require('ws'); //记得安装ws
let wss = new WebSocket.Server({ port: 3000 });
wss.on('connection', function(ws) {
  ws.on('message', function(data) {
    console.log(data);
    ws.send('From server: 收到了！');
  });
});
