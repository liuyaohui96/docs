编辑器快捷键
    - 选中多列同位置  alt+shift+鼠标
    - 选中html标签被文字 shift+ctrl+ 左右方向键
    - htm标签跳转到左或右文字边缘 ctrl+左右方向键
    - 如果html标签内规律不等，找相等的标签，然后按住ctrl+d选中多个，左右方向键到达文字内容边缘

解决JS不支持模块化的问题
    - 浏览器前端js编写，要想模块化，需要可以引入第三方
      - require.js AMD
      - sea.js CMD
    - node.js 是 commonJS
    - ESscript6 modules 官方规范
  
新版本npm文件除了生成package.json文件，还会生成package-lock.json文件
    - npm5以没有package-lock.json
    - 当安装包的时候，npm都会生成或者更新package-lock.json这个文件
    - npm5以后不需要假如--save参数，它会自动保存依赖
    - package-lock.json 保存了整个包的依赖数组，能够更快地下载还原依赖包
        - 从文件来看，有一个lock，称为锁
            - 这个lock使用来锁定版本
            - 如果项目依赖了 1.1.1 版本，如果你install，其实会下载最新版本

1. 文件各文件目录的功能描述
    - views 存放前端文件
      - index.html
      - etc
    - public 存放开放的静态资源
      - img
      - js
      - css
      - lib
    - app.js
        - 编译文件入口
        - 引入express
        - 负责基本配置
            - 模板引擎art-template的引入与配置
            - body-parser的引入与配置
        - 各路由文件的引入与挂载  app.use(rounter)
        - 静态资源的处理
        - 404的处理
            - express 对于没有设定的请求路径，默认返回can not get xxx
            - 如果要定制404
            - 只需要在app.js最后增加
                ```JS
                app.use((req, res) => {
                    // 所有未设定的请求路径都会在这里被处理
                })
                ```
        - 注意： 路由处理顺序需要注意，前面的路由符合，就不会到达后面的
     -  各文件路由.js
        -  引入express，借助express.Rounter()配置路由
        - 引入数据处理方法模块
        - 接受并处理数据
            - get, post
                - req.query req.bocy
                - 调用数据处理方法模块中的方法
                - 客户端响应
        - 导出router
     -  各文件路由的数据处理方法模块 
        - 引入数据处理方法的所需模块
        - 导出方法

2. 其中的细节关键点
    - 路由设计
    - 如何包装路由
    - json的两个读写方法，node.js的读写
    - 对于一些表单值是字符串转换为数值的处理
    - 异步处理方法如何利用回调函数返回结果

3. 路由设计
    - 请求方法是什么
    - 请求路径
    - get参数
    - post参数
    - 功能

| 请求方法 | 请求路径         | get参数 | post参数                    | 备注                            |
| -------- | ---------------- | ------- | --------------------------- | ------------------------------- |
| GET      | /students        |         |                             | 回到首页加载学生信息            |
| GET      | /students/new    |         |                             | 跳转到添加页面                  |
| POST     | /students/new    |         | name, age , gender, hobbies | 处理添加学生请求并返回/students |
| GET      | /students/edit   | id      |                             | 跳转到编辑也main                |
| post     | /students/edit   |         | id, age, gender, hobbies    | 处理编辑请求并返回/students     |
| GET      | /students/delete | id      |                             | 处理删除请求并返回/students     |


2. 包装路由
    - 封装路由方法到一个rounter.js中，然后使用`moudle.exports=function(app){}`导出rounter内的方法，在app.js可以传入app参数，调用函数

    - express提供一种更好的方式专门用来包装路由
        ```JS
        let express = require('express');
        let router = express.Router();

        // 将路由挂载到router上
        router.get(...)

        // 导出router
        moudle.exports=router;
        ```

        然后把路由容器挂在到app上
        ```JS
        // router
        let router=require('./router');
        // 把路由容器挂载到app服务中
        app.use(router);
        ```

3. JSON 的转换
    ```JS
    // 将JSON对象转换为对象
    JSON.parse(object);

    // 得到JSON对象
    JSON.stringify(string);
    ```


4. 表单值是字符串转换为数值的处理
    - obj.proeprty = parseInt(obj.property)

5. 凡是需要得到方法内部的异步操作结果，则必须通过回调函数。往往异步函数都会带有回调函数
    ```js
    function fn(callback){
        setTimeout(()=>{
            let data='hello';
            callback(data);
        }, 1000);
    }

    fn((data) =>{
        console.log(data);
    })
    ```
