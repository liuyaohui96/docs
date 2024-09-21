```js
const koa = require('koa');

const app = new koa();

app.use(async ctx => {
  ctx.body = 'hello world';
});

app.listen(3000, () => {
  console.log('server stat, listen on port 3000');
});

```