let http = require('http');
let fs = require('fs');
let path = require('path');
let template = require('art-template');

let server = http.createServer();

let dir = path.join(__dirname, '/www');
// let dir = `F:/0StarupSoftware/kindle/0github/前端面试/公司真题/JavaSript/AJax/node/实验/3Apache目录列表生成/www`;
server.on('request', (req, res) => {
  fs.readFile(dir + '/temp.html', (err, data) => {
    if (err) return res.end('can not find temp.html');

    // 读取文件目录
    fs.readdir(dir, (err, files) => {
      if (err) return res.end('can not find the dir'); // filse is a array, all item is string
      let htmlStr = template.render(data.toString(), {
        files: files
      });
      res.end(htmlStr);
    }); // end readdir
  });
});

server.listen(5500, () => {
  console.log('server start... please access 5500 port');
});
