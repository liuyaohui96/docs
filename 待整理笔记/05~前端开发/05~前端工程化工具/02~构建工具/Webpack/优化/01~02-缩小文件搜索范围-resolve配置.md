

## resolve.modules 指定搜索模块的目录
当安装的第三方模块都放在项目的`./node_modules`的目录时，就没有必要一层一层地去寻找，所以，可以指定该设定为绝对路径，以减少寻找。

```js
resolve: {
  // 仅在当前目录下的node_modules目录下进行工作
  modules: [__dirname+'/node_modules']
}
```

## resovle.mainFields 配置main为package.json的入口文件描述字段
为了减少搜索步骤，在明确第三方模块的入口文件字段，尽量将它设置得更少，由于大多数第三方模块都采用main字段作为第三方模块入口文件的描述字段，所以配置main为package.json的入口文件的描述字段

```js
resolve: {
  mainFields: ['main']
}
```

## resolve.alias 配置
大多数库发布到npm仓库都包含有打包好的完整文件，对于这些库，需要配置alias。

注意，对这些库使用了这个配置后，就会影响到tree sharking， 使得完整仓库中用不到的代码也被打包，所以这个方法仅适合用于整体性较强的库，如react等，对于一些工具类的库，如果项目中仅需要使用几个工具函数，不建议使用本方法进行优化

```js
resolve: {
  alias: {
    'react': __dirname + '/node_modules/react/dist/react.min.js'
  }
}
```

## resolve.extension 配置
1. 尽可能使得这个列表项目更小
2. 对于出现平吕更高的文件后缀需要放在列表更前面
3. 写入导入语句的时候，尽量带上文件后缀，这样就能避免文件的查找过程。

## resolve.symlinks
如果你不使用 symlinks ，可以设置 resolve.symlinks: false (例如 npm link 或者 yarn link).

## resolve.cacheWithContext
如果你使用自定义解析 plugins ，并且没有指定 context 信息，可以设置 resolve.cacheWithContext: false 。