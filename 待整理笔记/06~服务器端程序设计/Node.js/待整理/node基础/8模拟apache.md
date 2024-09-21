# 模拟 Apache

1. 实验：模拟 Apache 的自动获取资源

   - 在上一个使用服务器发送数据的基础上改进
     - 关键是建立一个 www 文件夹
     - 用 dir 记录这个 www 文件夹在我电脑上的位置
     - 用 filePath 为请求的文件路径可以根据 req.url 获取
     - 特殊的 url 为`/`时，打开 index.html
     - 拼接 dir+filePath 作为资源路径
     - 用 fs.readFile()读取对应资源路径数据
     - res.end()输出这个数据

2. 实验：模拟 Apache 的资源目录的生成

   - 我们仅仅是为了借助浏览器的样式，和了解浏览器目录的基本结构
   - 将 www 文件夹用浏览器打开，f12，复制代码，放进 temp.html 中，删除脚本代码，留下标记语言和 css 样式
   - 在 node.js 中使用 fs.readFile 读取 temp.html
   - 使用 fs.readdir 读取 需要生成的文件，其回调函数 files 是一个 string 数组
   - 使用 files.forEach()动态生成多个内容，记为 content（借助 temp.html 内的 tr 结构）
   - 修改 temp.html,删除全部 tr，插入一个标记字符串，方便下一步的替换
   - 标记字符串替换为 content
   - res.end()输出

3. 实验： 使用模板引擎

   - 下载 art-template
     - 相应目录下 npm install art-template
   - 模板引擎

     - 只关心自己的模板标记， {{}} 语法称之为 mustache
     - 再次强调，模板引擎只关心它的语法，只会渲染它该渲染的内容
     - 服务器端一个重要概念：将所有文件都看作字符串（或二进制 buffer），浏览器负责将具体字符串或二进制 buffer 进行格式生成
