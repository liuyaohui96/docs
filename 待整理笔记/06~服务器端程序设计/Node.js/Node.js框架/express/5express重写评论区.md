1. 逻辑与此前基本一致
2. 表单提交方法改为 POST

   - req.query 虽然已经渠道了查询字符串的对象，但是它只能取到 get 请求参数
   - POST 的数据获取需要安装中间件( middleware) --> body-parser

     - npm install body-parser --save
     - 配置

       ```JS
       var express = require('express')
       // 引入body-parser
       var bodyParser = require('body-parser')
       var app = express()

       // 配置body parser，在req请求对象上会有一个body对象，
       // 可以通过req.body获取表单post请求体数据
       // parse application/x-www-form-urlencoded
       app.use(bodyParser.urlencoded({ extended: false }))

       // parse application/json
       app.use(bodyParser.json())

       app.use(function (req, res) {
       res.setHeader('Content-Type', 'text/plain')
       res.write('you posted:\n')
       res.end(JSON.stringify(req.body, null, 2))
       })

       ```
