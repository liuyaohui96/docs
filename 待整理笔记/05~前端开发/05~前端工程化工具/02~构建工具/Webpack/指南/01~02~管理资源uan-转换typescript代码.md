
## 转换typescript代码
```shell
# === 安装typescript编译器和loader
npm -i -D typescript ts-loader

yarn add -D typescript ts-loader
```

## typescript 的配置文件
需要对typescript的配置文件tsconfig.json 进行配置

tsconfig.json配置可以参考：https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

```json
// 支持 JSX，并将 TypeScript 编译到 ES5
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6", // 编译代码采用的模块规范
    "target": "es5", // 编译出代码采用ES哪个版本
    "jsx": "react",
    "allowJs": true,
    "sourceMap": true // 输出source map 方便调试
  },
  // 不编译这些目录的文件
  "exclude": [
      "node_modules"
  ]
}
```

## webpack.config.js配置
```js
module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + 'dist'
  }
};

```