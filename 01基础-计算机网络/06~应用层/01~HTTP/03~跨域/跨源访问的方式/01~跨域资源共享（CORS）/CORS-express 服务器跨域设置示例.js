let express = require('express');
let app = express();

//设置所有请求的头部
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'xx.xx.com');
  res.header(
    'Access-Control-Allow-Headers',
    'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  next();
});
