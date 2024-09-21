let http = require('http');
let fs = require('fs');
let server = http.createServer();

server.on('request', (req, res) => {
  //获取文件数据
  if (req.url == '/') {
    fs.readFile('./test.html', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text/plaint;charset=utf-8');
        res.end('fail to get html file');
      } else {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        // data是二进制buffer，res.end()可以接受二进制buffer和字符串
        res.end(data);
      }
    });
  }

  if (req.url == '/picture') {
    fs.readFile('./test.jpg', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text/plaint;charset=utf-8');
        res.end('fail to get picture');
      } else {
        res.setHeader('Content-Type', 'image/jpeg');
        // data是二进制buffer，res.end()可以接受二进制buffer和字符串
        res.end(data);
      }
    });
  }
});

server.listen(5500, () => {
  console.log('sever start, listen for port 5500...');
});
