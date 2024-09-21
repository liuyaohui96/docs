1. url.parse(urlString[, parseQueryString[, slashesDenoteHost]])

   - urlString 传递的 url 字符串
   - 返回一个 url object
     - 其中有一些常用属性 - protocol 协议
     - host 主机 例如 127.0.0.1:3000
     - hostname 主机名 127.0.0.1
     - port 端口 3000
     - search 带问好的查询字符串
     - query 查询字符串
     - path 端口好后的内容
     - pathname 端口后的路径，但不包括 query 后的内容

2. url.parse(urlString ,true)
   - 返回的 url object 里的 path 属性会变为一个对象
