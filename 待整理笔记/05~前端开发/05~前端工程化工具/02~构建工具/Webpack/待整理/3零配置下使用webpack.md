webpack 是一个打包工具，打包命令为`npx webpack`
1. 首先去`./node_modules/.bin/webpack.cmd`, 然后这个文件指引你去找`./node_modules/webpack/bin/webpack.js`这个文件
2. 运行webpack，需要运行webpack-cli
   - `./node_modules/webpack-cli/cli`下有一个文件`config-yargs.js`，里面有这样一段描述`defaultDescription: "webpack.config.js or webpackfile.js"`, 即可以在`webpack.config.js` 或者`webpackfle.js` 中生成配置文件指定webpack的出入口
   
   - 如果没有`webpack.config.js` 或者`webpackfle.js`配置文件，将会将`./src/index.js`作为入口文件，`./dist/main.js`作为出口文件



   