// 导入第三方模块
const express = require('express');

let bodyParser = require('body-parser');
let session = require('express-session');
// 自定义模块导入
let router = require('./router');

// 实例化以及端口设置
let app = express();
app.listen(5500, () => {
  console.log('server start...');
});

// 第三方模块设置
// 配置express-art-templates
app.engine('html', require('express-art-template'));
// 配置body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 配置session
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  })
);

// 静态资源开放
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/public', express.static(__dirname + '/public'));

// 设置常用路径的代替名字
// 默认是views目录
app.set('views', __dirname + '/views/');

// 其它路由
app.use(router);
