let http = require('http');

let server = http.createServer();

server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  res.write(`request url is ${req.url}`);
  res.write('hello 世界');
  res.end();
});

server.listen(5500, () => {
  console.log('server start, listen for 5500 port...');
});
