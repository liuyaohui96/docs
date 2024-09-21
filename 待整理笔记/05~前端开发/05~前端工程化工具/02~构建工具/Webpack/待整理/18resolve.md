resolve 解释

查找包是在当前目录，一直往上找

在 `webpack.config.js`中，设置其中的resolve属性的modules属性，设置哪一个模块webpack的查找规则，如果是相对路径，会在当前目录以及其上层目录一直寻找。如果是绝对路径，就只在当前目录中寻找
```js

 resolve: {
    modules: [__dirname+'/node_modules']
  }
```


# 引用bootstrap样式
`import 'bootstrap/dist/css/bootstrap.min.css';` 这样是ok的

`import 'bootstrap'` 是不行的

这样是很长的，可以在resovle上设置别名属性alias

```js
resolve: {
  alias: {
    Utilities: path.resolve(__dirname, 'src/utilities/'),
    Templates: path.resolve(__dirname, 'src/templates/')
  }
}

// 举例

```

# mainfields
bootstrap 的package.json中有一些字段，可以使用这个来设置
```js
 resolve: {
    mainFields: ['style', 'main']
  }
```

# mainfiles
入口文件的名字，默认为`index.js`


# extision
先找js，js找不到，找css
```js
resolve: {
    extensions: ['.js','.css']
}
```