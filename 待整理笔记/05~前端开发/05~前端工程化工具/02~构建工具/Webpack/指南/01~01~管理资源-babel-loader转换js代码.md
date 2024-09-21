
## 代码转换的需要
通常在项目开发中使用ES6S6+代码规范进行开发，最终需要将ES6+代码规范转换为大多数浏览器都能解析的ES5规范，

## babel
通常使用babel转换ES6+代码规范为ES5, babel是一个javascript编译器，用于将ES6+代码转换为ES5代码

Babel 执行编译的过程中，从项目根目录的`.babelrc`文件中读取配置信息，这是一个JSON文件


关于babel的更多内容可以查看bable相关内容

## webpack中使用babel进行代码转换
```shell
npm install -D babel-loader @babel/core @babel/preset-env
```

配置webpack.config.js
```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

## babel-loader 很慢的处理方法
1. 尽可能使用`/\.js$/ `匹配
2. 使用loader的exclude选项排除node_modules