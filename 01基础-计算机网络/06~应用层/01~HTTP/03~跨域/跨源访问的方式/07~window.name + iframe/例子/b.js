let http = require('http');
let fs = require('fs');
http
  .createServer((req, res) => {
    fs.readFile(__dirname + req.url, (err, data) => {
      res.end(data);
    });
  })
  .listen(5000, () => {
    console.log('server start...');
  });
