1. 设置通过localhost访问我们的本地静态资源
    - 使用`webpack-dev-server`
    - 本地项目安装 `npm i -D webpack-dev-server`
    - 启动 `npx webpack-dev-server`
2. 修改package.json使用npm启动webpack-dev-server
    ```js
    "scripts": {
      "dev": "webpack-dev-server"
    }

    // 通过npm启动
    npm run dev
    ```
3. 在webpack.config.js中配置webpack-dev-server
    
    ```js
    devServer: {
      port: 5000,
      progress: true, // 打包记录条
      contentBase: './dist', // 启动的路径
      open: true, // 自动打开浏览器
      compress: true // gzip 压缩
    }
    ```

4. 自动打包创建html文件到dist目录下，需要插件
    - 安装`html-webpack-plugin`
        - `npm i -D html-webpack-plugin`
    - 在webpack.config.js中有一个plugins属性，类型是数组

        ```js
       // 插件配置
        plugins: [
            new HtmlWebpackPlugin({
            template: './src/index.html', // 指定模板
            filename: 'index.html', // 打包后的名称
            minify: {
                removeAttributeQuotes: true, // 移除html中的双引号
                collapseWhitespace: true // 移除空格
            },
            hash: true //文件中的路径引用使用hash引用
            })
        ]
        ```