const koa = require('koa');

const app = new koa();

app.use(async (ctx, next) => {
  console.log('1');
  await next();
  console.log('2');
});

app.use(async (ctx, next) => {
  console.log('3');
  await next();
  console.log('4');
  ctx.body = 'hello world';
});
app.use(async ctx => {
  console.log('5');
  ctx.body = 'hello world';
  console.log('6');
});
/*
输出顺序为： 1 3 5 6 4 2
*/

app.listen(3000, () => {
  console.log('server stat, listen on port 3000');
});
