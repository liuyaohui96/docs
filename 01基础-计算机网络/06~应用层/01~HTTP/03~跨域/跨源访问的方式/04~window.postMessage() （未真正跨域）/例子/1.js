let http = require('http');
let fs = require('fs');
http
  .createServer((req, res) => {
    fs.readFile(__dirname + req.url, (err, data) => {
      res.end(data);
    });
  })
  .listen(5500, () => {
    console.log('server start...');
  });
