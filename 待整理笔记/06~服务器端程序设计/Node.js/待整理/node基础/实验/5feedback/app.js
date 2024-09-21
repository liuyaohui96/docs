let http = require('http');
let path = require('path');
let fs = require('fs');
let template = require('art-template');
let url = require('url');

let comments = [
  {
    name: '张三',
    message: '我今天不见了手机',
    dateTime: '2019-03-05'
  },
  {
    name: '李四',
    message: '我今天找到了手机',
    dateTime: '2019-03-05'
  }
];

http
  .createServer((req, res) => {
    let urlObj = url.parse(req.url, true);
    let pathname = urlObj.pathname;
    if (pathname == '/') {
      fs.readFile(__dirname + '/views/index.html', (err, data) => {
        if (err) return console.log('can not found index.html');
        let htmlStr = template.render(data.toString(), {
          comments: comments
        });
        res.end(htmlStr);
      }); // end index.html
    } else if (pathname.indexOf('/public/') == 0) {
      fs.readFile(__dirname + pathname, (err, data) => {
        if (err) return console.log('can not find the file');
        res.end(data);
      }); // end public source
    } else if (pathname === '/post') {
      fs.readFile(__dirname + '/views/post.html', (err, data) => {
        if (err) console.log('can not find post.html');
        res.end(data);
      });
    } else if (pathname === '/pinglun') {
      let comment = urlObj.query;
      let date = new Date();
      comment.dateTime = `${date.getFullYear()}年${date.getMonth() +
        1}月${date.getDate()}日`;
      comments.unshift(comment);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
    } else {
      fs.readFile(__dirname + '/views/404.html', (err, data) => {
        if (err) return console.log('404 not found');
        res.end(data);
      });
    }
  })
  .listen(5500, () => {
    console.log('server start...');
  });
