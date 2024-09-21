# http

1. http.createServer([options], [requestListener])

   - options 可选
   - requestListener
   - 返回一个 http.Server 实例

2. emitter.on(eventName, listener)

   - server.on('request', listener)

     - 'request' 请求事件
     - listener 事件发送执行的函数，这里有两个参数 req, res

       - req 请求对象
         - req.url 可以获取请求路径，端口号后面的字符串
         - req.socket.remotePort 请求服务器的客户端的端口号
         - req.socke.remoteAddress 请求服务器的地址
       - res 响应对象

         - res.write() 给客户端发送响应数据
           - 可以使用数次，一定要使用 res.end()结束，否则客户端一直等待
         - res.end() 也可以使用 end 的同时发送数据
         - 响应的内容只能是字符串或者二进制数据
         - 服务器响应的数据默认是 utf8 编码，但是浏览器并不知道，所以告知浏览器
         - 使用 `res.setHeader('Content-Type', 'text/plain;charset=utf-8')`
         - Content-Type 类型有：
           - text/plain
           - text/html
           - text/css
           - application/javascript
           - application/json
           - application/xml
           - image/jpeg jpeg, jpeg 图片
           - image/png png 图片

3. server.listen(port,[host, [backlog]], callback)

   - port 端口号
   - [host, [backlog]] 不清楚
   - callback 回调函数，不用参数

4. 例子

   ```JS
   let http = require('http');

   let server = http.createServer();

   server.on('request', (req, res) => {
        res.write(`request url is ${req.url}\n`);
        res.write('hello world');
        res.end(' end can did the same thing');
    });

   server.listen(5500, () => {
        console.log('server start, listen for 5500 port...');
   });

   ```
