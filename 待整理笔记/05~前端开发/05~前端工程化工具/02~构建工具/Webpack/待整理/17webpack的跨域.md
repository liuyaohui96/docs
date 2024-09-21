proxy参考文档：https://webpack.js.org/configuration/dev-server/#devserverproxy
webpack-dev-middleware参考文档： https://webpack.js.org/guides/development/#using-webpack-dev-middleware
webpack 内部就有 express

1. devServer中proxy属性
`webpack.config.js`文件中
```js
module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api' : ''}
      }
    }
  }
};
```


2. 前端单纯想模拟数据
```js
devServer: {
    before: function(app, server) {
      app.get('/some/path', function(req, res) {
        res.json({ name: 'liuyaohui' });
      });
    }
}
```


3. 有服务端，不想用代理来处理，能不能在服务器端启动webpack，端口用服务器端口
  `npm i -D webpack-dev-middleware`

