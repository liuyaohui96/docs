const koa = require('koa');
const app = new koa();
app.listen(3000);

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
    ctx.body = `error happen ----> custom
    \nstatus: ${err.status}\tmessage: ${err.message}`;
  }
});

app.use(async ctx => {
  // 自定义抛出一个错误
  ctx.throw(500, '出错啦~~~~~');
  ctx.body = 'hello world'; // 不输出
});
