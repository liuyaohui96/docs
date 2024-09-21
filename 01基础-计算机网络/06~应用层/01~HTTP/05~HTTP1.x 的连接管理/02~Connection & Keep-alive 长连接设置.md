
##　Connection
Connection 是general header，决定当前的事务完成后，是否会关闭网络连接。如果该值是“keep-alive”，网络连接就是持久的，不会关闭，使得对同一个服务器的请求可以继续在该连接上完成。

```shell
Connection: keep-alive

# 这是HTTP/1.0请求的默认值
Connection: close
```

## Keep-alive
Keep-alive 是general header 用来设置连接超时时长和最大连接数

设置Keep-alive 需要设置Connection header 值为`Keep-Alive`

在HTTP/2 协议中， Connection 和 Keep-Alive  是被忽略的
```shell
Keep-Alive: parameters

# 例子
# timeout：指定了一个空闲连接需要保持打开状态的最小时长（以秒为单位）
# max：在连接关闭之前，在此连接可以发送的请求的最大值
Keep-Alive: timeout=5, max=1000
```

