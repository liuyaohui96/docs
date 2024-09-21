let express = require('express');
let app = express();
let bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

let tempate = require('art-template');

// 设置template
app.engine('html', require('express-art-template'));

// 评论全局变量
let comments = [
  { name: '刘耀惠', message: '我要买手机', dateTime: '2019年3月7日' }
];

app.listen(5500, () => {
  console.log('server stasrt, port 5500 listen...');
});

app.get('/', (req, res) => {
  //   res.sendFile(__dirname + '/views/index.html');
  res.render(__dirname + '/views/index.html', {
    comments: comments
  });
});

app.get('/post', (req, res) => {
  res.sendFile(__dirname + '/views/post.html');
});

// 对表单提交的数据处理，然后重定向
app.post('/pinglun', (req, res) => {
  // 增加评论
  console.log(req.body);
  let comment = req.body;
  let date = new Date();
  comment.dateTime = `${date.getFullYear()}年${date.getMonth() +
    1}月${date.getDate()}日`;
  comments.unshift(comment);

  // 重定向
  res.redirect('/');
});

// 两个app.use 如果判断404的放在前面，后面的就不能应用

// 静态文件
app.use('/public', express.static(__dirname + '/public'));

// 对于响应状态码为404, 我们发送404.html给它
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/views/404.html');
});
