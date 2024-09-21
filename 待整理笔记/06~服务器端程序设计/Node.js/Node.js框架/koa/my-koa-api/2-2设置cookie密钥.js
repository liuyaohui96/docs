const koa = require('koa');
const app = new koa();

app.listen(3000);

app.keys = ['i am a boy', 'you are a girl'];

app.use(async ctx => {
  ctx.cookies.set('name', 'liuyaohui', { signed: true });
});
