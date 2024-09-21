webpack-dev-server 是一个用于快速开发的应用程序，可以提供一个简答的web服务器，提供一下功能：
1. 提供HTTP服务，而不是本地文件预览
2. 监听文件变化，自动刷新页面
3. 支持source map， 方便调试代码

devserver 将webpack构建的文件保存在内存中，范围文件需要通过http服务访问

```shell
# 安装 webpack-dev-server 
npm -i -D webpack-dev-server

yarn add -D webpack-dev-server 
```

需要在package.json配置启动的npm脚本
```json
"scripts":{
  "start": "webpack-dev-server --open"
}

// npm start | yarn start 启动
```


## devServer.hot
注意，模块热替换不适用于用于生产环境，仅在开发环境中使用
```js
// === object
devserver：{
  /*
  启用 webpack 的模块热替换特性, 源代码更新后，不刷新整个页面而是使用
  新的模块替换旧的模块
  */
  hot: true
}

// ===== 热替换其他设置
/* 
Note that webpack.HotModuleReplacementPlugin is required to fully enable HMR. If webpack or webpack-dev-server are launched with the --hot option, this plugin will be added automatically, so you may not need to add this to your webpack.config.js
*/
plugins: [
  new webpack.HotModuleReplacementPlugin(),
  // 开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境
  new webpack.NamedModulesPlugin()
]
```

## devServer.contentBase
```js
devserver：{
 /*
  配置服务器文件的根目录，默认情况下是项目的根目录，一般不需要设置，只有在提供静态文件时才需要
  */
  contentBase: contentBase: path.join(__dirname, "public")
}
```

## devServer.host
指定服务器的host，默认是localhost，
```js
// 如果需要局域网内的其他设备访问，需要进行自定义配置主机为
host: "0.0.0.0"
```

## devServer.port
指定服务器的端口，默认为8080, 如果被占用，则自动使用8081端口，以此类推

## devServer.compress
设置使用 gzip 进行压缩

```js
compress: true
```