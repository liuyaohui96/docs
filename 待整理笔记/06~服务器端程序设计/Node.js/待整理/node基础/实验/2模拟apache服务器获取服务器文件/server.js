let http = require('http');
let fs = require('fs');
let path = require('path');

let server = http.createServer();

let dir = path.join(__dirname, '/www');
// let dir = `F:/0StarupSoftware/kindle/0github/前端面试/公司真题/JavaSript/AJax/node/实验/模拟apache服务器获取服务器文件/www`;
server.on('request', (req, res) => {
  let url = req.url;
  let filePath = '/index.html';
  if (url !== '/') {
    filePath = url;
  }

  fs.readFile(dir + filePath, (err, data) => {
    if (err) return res.end('404 not found');
    res.end(data);
  });
});

server.listen(5500, () => {
  console.log('server start... please access 5500 port');
});
