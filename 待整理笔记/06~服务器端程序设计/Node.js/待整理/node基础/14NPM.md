1. package.json 包描述文件，包说明文件
   - 我们建议每个项目都要有一个 package.json
   - 可以使用 npm init 初始化 package.json, 终端依次填入
     - name 自动填写 可修改
     - version 自动填写 可修改
     - description 项目描述
     - entry point 项目入口， 通过执行这个，执行整个程序
     - test command 暂时跳过
     - git reposity
     - keyword 跳过，被 npm 搜索
     - author 作者
     - license 软件开源许可证
   - 最后初始化了 package.json 文件
2. node package manager
   - npm install art-template --save
     - 加了--save 才能在 package.json 中加入第三方模块的`dependencies`信息,帮助我们保存第三方包的依赖信息
     - 建议 npm install 都假如 --save 这个选项，目的用来保存依赖项信息
     - 如果后面你删除了 node_modules, 使用 npm install 可以根据 package.json 中的 dependencies 的所有依赖项直接下载，还原 node_moudles
3. npm

   - 一个网站 npmjs.com
   - 命令行工具，只要安装了 node，就安装了 npm
     - npm --version 查看 npm 版本
     - npm install --global npm 升级 npm
     - npm init 初始化
     - npm init -y 可以跳过向导，快速生成
     - npm install 根据 package.json 中的 dependencies 下载相应包
       - npm i
     - npm install 包名 只下载响应包
       - npm i 包名
     - npm install 包名 --save 下载相应包，并在 package.json 中的 dependencies 填入信息
       - npm i 包名 -S 注意是大 S
     - npm uninstall 包名 如果有依赖项会亦然保存
       - npm un 包名
     - npm uninstall 包名 --save 删除的同时也会把依赖信息也删除
       - npm un 包名 -S 注意是大 S
     - npm --help 查看帮助
     - npm 命令 --help 查看具体命令的使用帮助

4. 解决 npm 被墙的问题
   - npm 存储包文件服务器在国外，有时候会被墙，速度很慢
     - 搜索 cnpm
   - http://npm.taobao.org/
     - 淘宝的开发团队把 npm 做了一个备份
   - 解决方法
     - npm install --global cnpm 全局安装 cnpm，--global 不可以省略
       - 安装包的时候将 npm 替换成 cnpm
         - 例如 cnpm install jquery 会使用淘宝的服务器下载 jquery
     - 如果不想安装 cnpm，又想使用淘宝服务器来下来
       - npm install jquery --registry=https://registry.npm.taobao.org
     - 这个配置很麻烦，可以将这个配置假如到配置文件中
       - npm config set registry https://registry.npm.taobao.org
       - 经过了这个配置，以后所有的 npm install 都会默认通过淘宝服务器来下载
       - npm config list 查看配置是否成功
