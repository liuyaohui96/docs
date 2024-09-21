app.keys:
  - `keys: Keygrip | string[]`

# 背景知识
ctx.cookies.get(name, [options])

ctx.cookies.set(name, value, [options])
  - maxAge  一个数字表示从 Date.now() 得到的毫秒数
  - signed  cookie 签名值
  - expires  cookie 过期的 Date
  - path  cookie 路径, 默认是'/'
  - domain  cookie 域名
  - secure  安全 cookie
  - httpOnly  服务器可访问 cookie, 默认是 true
  - overwrite  一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 false). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set-Cookie 标头中过滤掉

# 如何给cookie加锁 设置和获取cookie
```js
app.keys = ['abc', '123'];

/* 相当于
app.keys = new KeyGrip(['abc', '123'], 'sha256');
*/

// 设置cookie，并设置签名，防止cookie被修改
ctx.cookies.set('name', 'dafanshu', { signed: true })

// 返回请求头cookie的name，如果没有签名，则返回undefined
// 设置{ signed: true }判断签名是否被修改，修改了就清除浏览器中的signed，并返回undefined
ctx.cookies.get('name', { signed: true })

```