app.context 是 ctx 的原型 
# 给app.context 添加属性
以通过编辑 app.context 为 ctx 添加其他属性。这对于将 ctx 添加到整个应用程序中使用的属性或方法非常有用,但是，更多地依赖于ctx，这可以被认为是一种反模式（解决问题的不良方法）

例如，要从 ctx 添加对数据库的引用：
```js
app.context.db = db();

app.use(async ctx => {
  console.log(ctx.db);
});
```


我的例子
```js
const Koa = require('koa');

const app = new Koa();

app.context.sayHello = function() {
  return 'hell world';
};

app.use(async ctx => {
  ctx.body = ctx.sayHello();
});

app.listen(3000);
```

# 详解context
Koa Context 将 node 的 request 和 response 对象封装到单个对象中

例子：
```js
const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
  ctx.body = `上下文环境:----->'${ctx}\nrequest.method: ${ctx.request.method}\n
request.url: ${ctx.request.url}\n`;
  
});

app.listen(3000);
```