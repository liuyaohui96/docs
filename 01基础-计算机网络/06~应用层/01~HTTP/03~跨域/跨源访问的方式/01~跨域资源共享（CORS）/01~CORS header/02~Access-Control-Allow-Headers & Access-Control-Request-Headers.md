
## Access-Control-Allow-Headers
Access-Control-Allow-Headers 四response header， 用于 preflight request （预检请求）用于预检请求的响应，内容是请求 `Access-Control-Request-Headers` header 中的内容
```shell
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
Access-Control-Allow-Headers: *
```

> 请求header `Access-Control-Request-Headers` 出现于 preflight request （预检请求）中，用于通知服务器在真正的请求中会采用哪些请求头