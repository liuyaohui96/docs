const http = require('http');

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Ping-Other, Content-Type');
    res.setHeader('Content-Type', 'text/html');
    res.write('Hello World! 刘耀惠');
    res.end();
  })
  .listen(3000);
