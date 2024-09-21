ctx.app
应用程序实例引用


```js
const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
  console.log(ctx.app);
});
/*
{ subdomainOffset: 2, proxy: false, env: 'development' }
*/

app.listen(3000);
```

# ctx.app.emit
视图层一旦收到一个消息，我们需要发射一个事件，利用事件监听对它进行处理
```js
const Koa = require('koa');

const app = new Koa();

app.on('getUrl', (ctx, value) => {
  ctx.body = `get url -----> ${value}`;
});

app.use(ctx => {
  ctx.app.emit('getUrl', ctx, ctx.req.url);
});
app.listen(3000);

```