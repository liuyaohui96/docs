
## Access-Control-Max-Age
Access-Control-Max-Age 是response header， 表示 preflight request  （预检请求）的返回结果（即 Access-Control-Allow-Methods 和Access-Control-Allow-Headers 提供的信息） 可以被缓存多久。
```shell
# 单位是秒
Access-Control-Max-Age: <delta-seconds>

# 将预检请求的结果缓存10分钟
Access-Control-Max-Age: 600 
```
> 一旦在这个时间之内`Access-Control-Max-Age`再次发送请求，直接发送真正的请求，不通要再发送预请求