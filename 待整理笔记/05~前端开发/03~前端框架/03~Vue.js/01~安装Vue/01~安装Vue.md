
## 安装Vue

建议：
* 在浏览器安装`Vue Devtools`用于检查(inspect)和调试(debug) Vue 应用程序
* 在开发过程中不要使用缩小的版本(minified version), 缩小版本对常见错误(commmon mistakes)不会发生警告

安装方式：
1. CDN引入
2. npm
3. vue-cli

## CDN 引入
* 学习使用，可以使用最新Vue版本
    ```html
    <!-- 链接到最新的vue版本 -->
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    ```
* 生产环境下，防止新版本造成破坏，建议链接到特定的版本
    ```html
    <!-- 生产环境下，链接到特定版本-->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
    ```
* 使用原生 ES Modules，需要引入兼容 ES Module 的构建文件
    ```html
    <script type="module">
    import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
    </script>
    ```

## NPM 安装
```shell
npm install Vue

# 建议设置淘宝镜像：https://npm.taobao.org/
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install [name]
```

## 命令行工具 (CLI)
[vue-cli](https://cli.vuejs.org/)
