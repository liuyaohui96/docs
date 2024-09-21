const http = require('http');
const fs = require('fs');
const url = require('url');

http
  .createServer((req, res) => {
    if (req.url.includes('/ajaxPromise')) {
      let q = url.parse(req.url, true);
      // getData 是一个返回promise的自定义函数
      getData(q.query.filename).then(data => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.write(data);
        res.end();
      });
    }
  })
  .listen(3000, () => {
    console.log('server listen at port 3000....');
  });

function getData(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      resolve(data);
    });
  });
}
