
## CROS预检请求
非同源的请求情况下，对于可能对服务器数据产生副作用的HTTP请求方法，需要浏览器预检（preflight）请求，预检请求使用HTTP请求方法中的`OPTIONS`方法从服务器获取服务器支持的方法。然后，在服务器“批准”后，发送实际请求。

不会触发预检请求，通常称为简单请求（simple request），需要满足以下条件：
1. 请求方法是：GET，HEAD，POST
2. 除了用户代理自动设置的header，只能手动设置的被Fetch规范定义为CORS安全请求头列表，如
    * Accept
    * Accept-Language
    * Content-Language
    * Content-type
    * DPR
    * Save-data
    * Viewport-Width
    * Width
3. Content-type 的类型只能为：
    * application/x-www-form-urlencoded
    * multipart/form-data
    * text/plain

实际项目中请求格式可能是application/json格式编码，或者使用自定义请求头都会触发CORS的预检请求

一个OPTIONS请求一般会携带下面两个与CORS相关的头
* Access-Control-Request-Method : 本次预检请求的请求方法
* Access-Control-Request-Headers：本次请求所携带的自定义首部字段

服务端收到该预检请求后，会返回与CORS相关的响应头。主要会包括下面几个，但可能还会有其他的有关CORS字段：
* Access-Control-Allow-Origin: 服务器允许的跨域请求源
* Access-Control-Allow-Methods: 服务器允许的请求方法
* Access-Control-Allow-Headers : 服务器允许的自定义的请求首部字段
