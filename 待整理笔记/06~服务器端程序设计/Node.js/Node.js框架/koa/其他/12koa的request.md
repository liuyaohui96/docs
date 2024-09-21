1. ctx.header
  - 请求头部

2. ctx.method
  - 请求方法

3. ctx.length
  - 以数字返回请求的 Content-Length，或 undefined

4. request.href
  - 完整的请求URL，包括 protocol，host 和 url
  - request.protocol
  - request.host
  - request.url(path+'?'querystring) 

5. ret.host
  - hostname + port

6. ctx.hostname

7. ctx.path
  - 获取请求路径名

6. request.search
  -  ? + 原始查询字符串
7. ctx.querystring
  - 获取原始查询字符串.

8. request.query
  - 获取解析的查询字符串对象
      ```js
      {
      color: 'blue',
      size: 'small'
      }
      ```

9. request.fresh
  - 检查请求缓存是否“新鲜”，也就是内容没有改变