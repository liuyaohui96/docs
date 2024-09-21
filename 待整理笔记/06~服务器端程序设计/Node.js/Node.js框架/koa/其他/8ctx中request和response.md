ctx.req   是Node 的 request 对象.
ctx.res Node 的 response 对象. 
  - 绕过 Koa 的 response 处理是 不被支持的,
    ```js
    // 以下不能再koa中使用
    res.statusCode
    res.writeHead()
    res.write()
    res.end()
    ```

ctx.request 是koa 的 Request 对象.
ctx.response 是koa 的 Response 对象.
  - 为了绕过 Koa 的内置 response 处理，你可以显式设置 ctx.respond = false;