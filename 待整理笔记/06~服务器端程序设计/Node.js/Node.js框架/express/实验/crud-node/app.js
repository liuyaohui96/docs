let express = require('express');
let app = express();
let bodyParse = require('body-parser');
let router = require('./router');

// 配置模板引擎
app.engine('html', require('express-art-template'));
// 配置body-parser
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.listen(5500, () => {
  console.log('server start...');
});

// 路由
app.use(router);

// 开放bootstrap 和 public 目录
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/public', express.static(__dirname + '/public'));

// 404
app.use((req, res, next) => {
  res.status(404).render(__dirname + '/views/404.html');
});
