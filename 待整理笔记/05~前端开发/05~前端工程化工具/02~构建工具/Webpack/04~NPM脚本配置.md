
## NPM 脚本
用 CLI 这种方式来运行本地的 webpack 不是特别方，可以在 package.json 添加一个 npm 脚本

```json
// === package.json
"scripts": {
  "build": "webpack"
}
// 取代 npx webpack 命令
// 使用 npm run build 或者 yarn run build 开始构建文件
```

