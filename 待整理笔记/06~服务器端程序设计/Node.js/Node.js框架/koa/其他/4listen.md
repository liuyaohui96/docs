app.listen(...) 方法只是以下方法的语法糖:
```js
const http = require('http');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
```
同一个应用程序可以监听多个端口