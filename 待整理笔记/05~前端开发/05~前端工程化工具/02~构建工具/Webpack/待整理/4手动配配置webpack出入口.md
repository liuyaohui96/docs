1. 在项目目录下创建`webpack.config.js` 或者`webpackfle.js`, 更多使用前者

2. webpack.config.js中可以这样写

    ```js
    module.exports = {
        // 这个真正开发的时候可以省略
        mode: 'development', // 模式，production development,默认是production
        
        entry: './src/index.js', // 入口，从哪里打包
        output: {
            filename: 'bundle.js', // 打包后的文件名
            path: __dirname + '/dist' // 绝对路径
        }
    };
    ```


# 改变webpack默认指定的配置文件
 1. 命令行中输入 `npx webpack --config 以当前目录为基础的文件相对路径`
 2. 如果文件名很长，不想每次都手动输入，在`package.json`中添加
    
    ```js
    "scripts": {
      "build": "webpack --config 以当前目录为基础的文件相对路径" // "build 可以换名字
    }
    ```
    然后命令行输入 `npm run build`即可


# 动态的js hash 文件名
每次修改重新`npm run build` 或者 `npx webpack` 都生成带有hash的文件名
```js
module.exports = {
   output: {
    filename: 'bundle.[hash].js', // 打包后的文件名, hash, 每次修改都产生新的文件
    path: __dirname + '/dist' // 绝对路径
  },
};
```
或者8个hash字符串
```js
output: {
    filename: 'bundle.[hash:8].js', // 打包后的文件名, hash, 每次修改都产生新的文件
    path: __dirname + '/dist' // 绝对路径
  },
```
