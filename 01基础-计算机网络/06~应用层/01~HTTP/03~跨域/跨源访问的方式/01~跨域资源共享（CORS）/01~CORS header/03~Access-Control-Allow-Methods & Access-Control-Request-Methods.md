
##  Access-Control-Allow-Methods & Access-Control-Request-Methods
Access-Control-Allow-Methods 用于 preflight request （预检请求）中，用于预检请求的响应， 指明了实际请求所允许使用的 HTTP 方法
```shell
Access-Control-Allow-Methods: POST, GET, OPTIONS
```

> 请求header `Access-Control-Request-Method` 出现于 preflight request （预检请求）中，用于通知服务器在真正的请求中会采用哪种  HTTP 方法。