res 的方法都会自动结束响应，不用使用`res.end()`

1. res.send([body])
   - 用于发送 http 响应
   - body 可以是 string， buffer 对象，对象，数组
     - buffer 对象 自动设置`Content-Type`为`application/octet-stream`, 除非提前定义
     - string 对象 自动设置`Content-Type`为`text/html`
     - 对象和数组， 表示为 JSON

- 该方法自动为 HTTP header 赋值`Content-Length`, 除非提前定义了

2. res.redirect([status,],path)

   - 根据 path 重定向，并指定 status，如果不指定 status，默认为 302
   - redirect 的 path 可以重定向网址
     - 如 https//github.com
   - redirect 的 path 可以重定向根目录
     - 如 /..
   - redirect 的 path 可以根据相等路径重定向
     - 如 post/..
   - redirect path 使用关键字 back - 会返回上一个页面，如果找不到，返回网站的`/`

3. res.render(view[,locals][,callback])

- render view 指定的文件， 然后发送 HTML string 给浏览器
- locals 定义 view 的本地变量
- 例子
  ```JS
  // pass a local variable to the view
  res.render('user', { name: 'Tobi' }, function(err, html) {
    // ...
  });
  ```
