
## Cookie的安全性设置
`Secure` 和 `HttpOnly Cookie`: HTTPS协议可以以加密请求将cookie安全地发送到服务器。新版本浏览器规定不安全的网站（http :)无法使用Secure指令设置Cookie，即使可以添加`Secure`保证安全性，不应该将敏感信息存储在cookie中，因为它们本质上是不安全的，并且此标志不能提供真正的保护。

为了避免XSS攻击，可以设置`HttpOnly` 使得`document.cookie` API无法访问该cookie

```shell
# 设置了 HttpOnly 属性的 cookie 不能使用 JavaScript 经由  Document.cookie 属性
# 、XMLHttpRequest 和  Request APIs 进行访问，以防范跨站脚本攻击（XSS）
Set-Cookie: <cookie-name>=<cookie-value>; Secure

# 一个带有安全属性的 cookie 只有在请求使用SSL和HTTPS协议的时候才会被发送到服务器
# 然而，保密或敏感信息永远不要在 HTTP cookie 中存储或传输，因为整个机制从本质上来说都是不安全的
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

# 设置 Secure & HttpOnly
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```