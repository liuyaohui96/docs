ctx.state
推荐的命名空间，用于通过中间件传递信息和你的前端视图, 即传送数据到前端视图层

例子， 10秒后返回数据
```js
const Koa = require('koa');

const app = new Koa();

// 一个异步的操作
function fetchUserInfo() {
  return new Promise((resolve, reject) => {

    // 10 秒后返回数据
    setTimeout(function() {
      resolve('liuyaohui');
    }, 10000);
  });
}

app.use(async (ctx, next) => {
  ctx.state.user = await fetchUserInfo();

  // 这是必须的
  await next();
});

app.use(ctx => {
  ctx.body = ctx.state.user;
});

app.listen(3000);


```