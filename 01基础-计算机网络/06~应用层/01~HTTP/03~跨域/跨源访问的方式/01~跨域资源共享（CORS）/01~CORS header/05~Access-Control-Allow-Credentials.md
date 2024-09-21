
## Access-Control-Allow-Credentials
`Access-Control-Allow-Credentials` 是 response header， 表示当包含请求的凭证模式时，是否可以将响应暴露给前端JavaScript代码。所以若一个对资源的请求带了credentials，如果`Access-Allow-Credentials`header 没有随资源返回，响应就会被浏览器忽视.

```shell
# 使用带credentials的 XHR 
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/', true); 
xhr.withCredentials = true; 
xhr.send(null);

# 使用带credentials的 Fetch 
fetch(url, {
  credentials: 'include'  
})
```
对于附带身份凭证的请求，服务器不能设置为 Access-Control-Allow-Origin 的值为`*`。这是因为请求的首部中携带了 Cookie 信息，如果 Access-Control-Allow-Origin 的值为“*”，请求将会失败。