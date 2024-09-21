
## Cookie 头部 - SetCookie & Cookie
1. Set-Cookie: response header， 内容包含服务器向客户端发送的cookie
2. Cookie: request Header，内容包含此前响应中`Cookie`header 设置的cookie

```shell
Set-Cookie: <cookie-name>=<cookie-value> 

# 响应报文中设置Set-Cookie头部
HTTP/2.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]

# Cookie 存储到浏览器后，每次发送请求报文自动携带Cookie头部
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```