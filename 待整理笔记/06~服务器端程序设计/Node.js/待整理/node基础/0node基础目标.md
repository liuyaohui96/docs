1. 首先你要了解 node.js 基本模块方法的使用

   - http 模块
     - 如何利用 http 模块创建服务器，监听，处理请求
       - 主要是 createServer, listen 或 on 方法
   - fs 模块
     - 如何利用 fs 模块读写文件
       - 主要是 readFile 和 getFile 方法
   - os 模块， 我们并没有在实验中使用
   - path 模块
     - 主要使用了 path.join()方法
   - url 模块
   - 主要使用了 path.parse(res.url, true) 方法获取查询字符串

2. art-template 的服务器渲染的使用
3. 借助 1，2 我们可以实现一个简单评论区的简单实现
4. 模块系统的了解

   - 模块的加载和导出
     - require 和 exports
     - exports 和 modules.exports 的联系与区别
     - require 的加载规则
       - 优先缓存加载
       - 路径加载
       - 非路径加载，包括核心模块加载和第三方模块加载
         - 特殊地，第三方模块加载具有一定规则
           - 从当前目录的 node_modules 查找相应包
           - 相应包内查找 package.json
           - package.json 内查找 main,如果没有查找 index.js
             - 如果没有 index.js，沿着上一层查找有没有 node_modules，依次循环，直到根目录

5. npm
   - npm 基本命令
   - npm 被墙的解决

以上为 node.js 的基础部分，待补充...
