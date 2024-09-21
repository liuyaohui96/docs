A Koa application is an object containing an array of middleware functions which are composed and executed in a stack-like manner upon request

# koa application
一个包含 中间件函数（middleware functions）数组的对象

## Cascading
> Koa invoke "downstream", then control flows back "upstream".`
koa 向下调用，然后向上回流，形成级联（Cascading）

- [例子](./2-1级联例子.js)

## 常用实例属性
1. app.env
  - 默认为 `NODE_ENV` or `"development"`

3. app.keys
  - 设置cookie密钥
    > `app.keys = ['im a newer secret', 'i like turtle'];`  自动使用[KeyGrip](https://github.com/   crypto-utils/keygrip) 设置带签名的cookie, 密钥可以倒换，并在使用 `{ signed: true }` 参数签名 Cookie 时使用, 如 `ctx.cookies.set('name', 'tobi', { signed: true });`

  - [例子](./2-2设置cookie密钥.js)
  
4. app.context
  - app.context 是 ctx 的原型，可以通过ctx.contect 为ctx增加用于全局的属性和方法。但依赖于ctx，是一种`anti-pattern`
  - 不建议使用这个增加属性和方法

# 常用方法
1. app.listen(port)

2. app.callback()
  - 返回回调函数，用于 `http.createServer()`方法处理request
  - 可以使用此回调函数将 koa 应用程序挂载到 Connect/Express 应用程序中

3. app.use(middleware function)
  - 将指定的中间件函数（middleware function）添加到这个application中

5. app.on('error', err =>{...}) | app.on('error', (error, ctx) => {...})
  - 集中式错误处理，可以添加一个 “error” 事件侦听器
  - 发生错误，无法响应客户端，ctx仍然被传递
  - 发生错误，可以响应客户端，没有数据被写入 socket 中，Koa 将用一个 500 “内部服务器错误” 进行适当的响应