文档参考： https://github.com/koajs/generic-session

yarn add koa-generic-session koa-redis

# 导入
```js
var session = require('koa-generic-session');
var redisStore = require('koa-redis');
var koa = require('koa');

var app = new koa(); // for koa v1 use `var app = koa();`
app.keys = ['keys', 'keykeys'];
app.use(session({
  store: redisStore()
}));

```
在其他地方通过设置 ctx.session.xxx 就能使用


# 除了session外，其他数据也想高速缓存
```js
const Redis = require('koa-redis');
const redisStore = new Redis().client;

// ...

// 操作
await redisStore.set('fix', 'liuyaohui');
  const rt = await redisStore.get('fix');
  ctx.body = {
    code: rt
};
```