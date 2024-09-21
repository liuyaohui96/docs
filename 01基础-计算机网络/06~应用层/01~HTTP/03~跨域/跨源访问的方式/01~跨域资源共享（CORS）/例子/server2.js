let http = require('http');
let fs = require('fs');
let whiteList = ['http://localhost:5500'];
http
  .createServer((req, res) => {
    let origin = req.headers.origin;
    if (whiteList.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Headers', 'name');
      res.setHeader('Access-Control-Allow-Methods', 'PUT');
      res.setHeader('Access-Control-Max-Age', 10000);
      res.setHeader('Access-Control-Allow-Credentials', true);
      res.setHeader('Access-Control-Expose-Headers', 'name');
      if (req.method == 'OPTIONS') {
        res.end(); // OPTIONS 请求不接受处理
      }
    }

    if (req.url == '/getData') {
      fs.readFile(__dirname + req.url, (err, data) => {
        console.log(req.headers);
        res.setHeader('name', 'dafanshu');
        res.end('get data from port 5000 success');
      });
    }
  })
  .listen(5000, () => {
    console.log('server start...');
  });
