以我的安装目录为例，说明 MongoDB windows 下的安装目录

- 确定当前目录有没有, 控制台输入`mongod --version`
- 输入 mongod，第一次会在盘符根目录下寻找 `/data/db` 作为数据存储目录，所以首先要自己手动创建盘符根目录下的`/data/db`，如果想要修改默认路径

  ```
  mogod --dpath=数据存储目录路径
  ```

  还是不要修改，不然每次都要输入这么多字符，停止连接，`ctrlt+C`即可，或者关闭开启服务的控制台

- 开启的话，新建一个控制台，然后输入`mongo`

1. 安装过程

   - 可以选择 custom 自定义安装，即选择自己的喜欢的目录安装 MongoDB，我的安装目录是`F:\mongoDB`
   - 不要勾选 MongoDB Compass，这是一个 MongoDB 的图形化管理工具，我们并不需要

2. 运行 MongoDB 服务器

   - 命令行进入`F:\mongoDB\bin`目录
   - 输入命令`mongod --dbpath F:\mongoDB\data\db`
   - 然后在浏览器输入`http://localhost:27017/`
     - 当出现`It looks like you are trying to access MongoDB over HTTP on the native driver port.` 即表示连接服务器成功

3. 配置本地 MongoDB 服务

   - 在`F:\mongoDB\data\`里面创建 log 文件夹
   - 在`F:\mongoDB`目录下创建 `mongo.config`文件，内容如下

     ```config
     dbpath=F:\mongoDB\data\db

     logpath=F:\mongoDB\data\log\mongo.log
     ```

   - 命令行进入`F:\mongoDB\bin`目录，输入
     `mongod --config "F:\mongoDB\mongo.config" --install --serviceName "MongoDB"`
   - 启动服务，可以在命令行输入 `net start MongoDB`
   - 关闭服务， 可以在命令行输入 `net stop MongoDM`
   - 删除服务， 可以在命令行输入 `mongod.exe --remove`

4. 进入 MongoDB 后台管理，在`F:\mongoDB\bin`目录输入`mongo`

5) windows 下配置环境变量（可以选择忽这个步骤）
   - 配置环境变量是为了打开命令行输入命令就可以快速启动
   - 方法
     - 将 `xxx/bin` 复制到系统变量 path 下
     - 我的设置是 `F:\mongoDB\bin`
