const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.listen(3000);

router.get('/', async ctx => {
  ctx.body = 'hello';
});

app.use(router.routes()).use(router.allowedMethods());
