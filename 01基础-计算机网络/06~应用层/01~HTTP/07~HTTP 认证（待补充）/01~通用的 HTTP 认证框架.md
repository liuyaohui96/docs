参考：
https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication

## 通用的 HTTP 认证框架
1. 服务器端向客户端返回 401（Unauthorized，未被授权的） 状态码，并在响应的header`WWW-Authenticate`
2. 需要证明身份的客户端可以在新的请求中添加 Authorization 首部字段进行验证，字段值为身份验证凭证信息