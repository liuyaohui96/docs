


## 不同使用场景的版本
1. UMD版本可以通过script标签直接在浏览器上使用
  * 完整本： vue.js
  * 运行时版本：vue.runtime.js
  * 完整版（生产环境）：vue.min.js
  * 运行时版本(生成环境)：vue.runtime.min.js
2. CommonJS 版本用来配合老的打包工具比如 Browserify 或 webpack 1（略）
3. ES6 Module
  * 为打包工具提供的ES6 module
    * 完整版：vue.esm.js
    * 运行时版本：vue.runtime.esm.js
  * 为浏览器提供的ES6 module  `<script type="moudle">`
    * 完整本：vue.esm.browser.js
    * 完整版（生产环境）：vue.esm.browser.min.js

## 完整版本和运行时版本
* 完整版本：包含编译器和运行时(compiler + runtimer)
* 运行时版本：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其它一切
```js
// === 完整版本
// this requires the compiler
new Vue({
  template: '<div>{{ hi }}</div>'
})

// === 运行时版本
// this does not requires the compiler
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```
当使用 vue-loader 或 vueify 的时候，*.vue 文件内部的模板会在构建时预编译成 JavaScript。最终打好的包里实际上是不需要编译器的，所以只用运行时版本即可，因为运行时版本相比完整版体积要小大约 30%，所以应该尽可能使用运行时版本

## 开发环境和生产环境模式
1. 对于UMD构建来说，开发环境和生产环节已经硬编码(hard-code)好了，开发环境使用不压缩的文件，生产环境使用压缩的文件
2. Common.js和ES Moudle是用于打包工具，所以不提供压缩版本，自行压缩。
  ```js
  // webpack 4+ 中，可以使用 mode 选项
  module.exports = {
    mode: 'production'
  }
  ```