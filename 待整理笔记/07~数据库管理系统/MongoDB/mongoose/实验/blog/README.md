1. 需要的第三方库

   - express
     - mongoose
     - jquery
     - bootstrap
     - art-template
       - 模板引擎的语法
         - 变量
         - 循环
         - 判断
         - 模板继承
     - body-parser  

2. app.js 的工作
   - 导入全局需要用到的第三方模块 require
   - 导入自定义模块 require
   - express实例对象创建以及端口监听
   - 第三方模块配置
   - 用户自定义模块配置
   - 路由设计
     - 开放静态目录`app.use(path, express.static(服务器资源路径))`
     - 设置资源默认获取路径 `app.set(name, value)`, 使用 value 代表值
     - 其他路由设置

3. views
   - 使用`_`标志这不是一个资源文件，而是辅助渲染的布局文件
     - `_layouts`
     - `_components`
     - 其他文件与文件夹


4. 路径设计
  | 路径      | 方法  | get参数 | post 参数                  | 是否需要登陆 | 备注                               |
  | --------- | ----- | ------- | -------------------------- | ------------ | ---------------------------------- |
  | /         | GET   | 无      | 无                         | 否           | 请求首页                           |
  | /register | GET   | 无      | 无                         | 否           | 请求登陆页面                       |
  | /register | POSST | 无      | username password email... | 否           | 处理注册请求，成功跳转到之前的页面 |
  | /login    | GET   | 无      | 无                         | 否           | 请求登陆页面                       |
  | /login    | post  | 无      | username password          | 否           | 请求登陆页面，返回之前的页面       |
  | /login    | get   | 无      | username password          | 否           | 处理退出请求，返回之前的页面       |


5. router.js的设计
    - 导入express
    - 建立express.Router()
      - router.get...
      - router.post...
    - 导出modules.exports
    - app.js 使用 app.use(router1, router2, ...)


6. register.html 异步请求处理
  - 使用jquery
  - 表单提交事件监听
  - 表单数据序列化
  - ajax请求


7. model 设计
  - 数据库模型设计
  - 步骤
    - 引入mongoose
    - schema设计，model构建
      - 引入schema  schem
    - 实例化model


8. router中register的数据处理
  - model的各种方法
  - res.json() 发送json格式
  - 自定义业务状态码，例如
    - 0 表示已经存在
    - 1 表示成功
    - 500 服务器错误


9. 服务器端的密码加密 第三方包
  - Javascript-md5
  - 对密码进行md5重复加密
    - npm install blueimp-md5
    - 所以比对比要加密后比对
    - 这里需要有更好地操作异步代码的方式， promise async


10. 同步请求与异步请求
  - 同步请求返回的响应数据会直接覆盖原页面（如表单），无论你的响应结果是什么
    - 有人想出的解决办法是，服务器响应重定向刷新页面，即会产生重新加载
      - 但是原来的内容没有了
        - 那就传递回去原页面的数据

  - 异步请求，使用Ajax  
  - 服务端重定向针对异步请求无效
  - 所以只能客户端去做重定向
    - `window.location.href=''`

11. http 是无状态的
    - cookie 自己记住自己，可以用来保存不太敏感的数据，不能用来保存用户登录的状态
      - 如你在cookie里面写`isVip:true`
      - 记住用户名，购物车

    - session 凭证唯一，不可能重复，一旦丢失，不可找回，凭证式服务器给你的，所以就很安全了
    - 默认session 是内存存储的，服务器一旦重启，就丢失，真正的生产环境是对session进行持久化存储
    - 在express 框架中默认不支持session 和 cookie
      - 可以使用中间件 express-session 解决
        - `npm install express-session`
        - 配置(在路由之前配置即可)
        - 使用
            ```JS
            app.use(session({
              secret: 'liuyaohui', // 自定义的加密的字符串,配置加密字符串，原有加密基础上和这个字符串拼起来加密
              // 目的为了增加安全性，防止客户端伪造
              resave: false,
              saveUninitialized: false // 未初始化保存，无论是否使用session，默认分配session
              // 默认为true，改为false响应发送时才发送
            }))

            /*
            req.session.foo='bar'  往session里面添加数据
            req.session.foo    访问session数据  
            */


            ```

          - 可以将当前用户注册到当前用户

          - 如果有人知道我二次加密，那如果他也二次加密比对，可以在后面添加
            - ` body.password = md5(md5(body.password)+'itcast');` 就无法二次加密进行比对

12. 退出处理
  - 清楚登陆状态
  - 重定向到登陆页
