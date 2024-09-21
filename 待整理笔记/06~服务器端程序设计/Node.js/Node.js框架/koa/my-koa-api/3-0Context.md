# context
context 封装了 node request 和 response 对象到一个对象中，提供了很多有用方法

# 常用属性
1. ctx.req
  - node 的request 对象

2. ctx.response
  - node 的response 对象
  - 以下属性和方法绕过了koa的处理，所以不要使用
    ```js
    res.statuscode
    res.write()
    res.writeHead()
    res.end()
    ```

3. ctx.request
  - koa 的request 对象

4. ctx.resposne
  - koa 的 response 对象

5. ctx.cookies.get(name, [options])
  - signed the cookie requested should be signed

5. ctx.cookies.set(name, value, [options])
   - maxAge: 表示从 Date.now()到期满的毫秒
   - signed: cookie的签名值
   - expires: cookie 过期的 Date
   - path: cookie 路径, 默认是'/'
   - domain: cookie 域名
   - secure: 安全 cookie
   - httpOnly: 服务器可访问 cookie, 默认是 true
   - overwrite 一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 false)

6. ctx.throw([status], [msg], [properties])
  - status 默认为500
  - [例子](./3-1错误处理.js)


7. ctx.assert(value, [status], [msg], [properties])“
  - 抛出错误的辅助方法

