const http = require('http');
const fs = require('fs');
let data = 0;
const server = http.createServer((req, res) => {
  if (req.url == '/long-polling') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write(new Date().toLocaleString());
    res.end();
  }
});

server.listen(3000, () => {
  console.log('server listen at port 3000...');
});
