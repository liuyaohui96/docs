
## Access-Control-Allow-Origin  & origin
Access-Control-Allow-Origin 是response header，指定响应资源可以被哪些origin共享
```shell
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>

# 资源可以被任何域访问
Access-Control-Allow-Origin：*
# 资源的访问限制为仅来自https：//foo.example的请求
Access-Control-Allow-Origin: https://foo.example
```

> Origin 请求header，指示了请求来自哪个站点，该字段仅指示服务器名称，并不包含任何路径信息（`Referer`header 包含了路径信息）