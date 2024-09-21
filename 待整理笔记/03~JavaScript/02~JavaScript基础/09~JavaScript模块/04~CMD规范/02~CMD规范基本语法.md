
## CMD规范基本语法
1. 定义模块
    ```js
    //定义没有依赖的模块
    define(function(require, exports, module){
      exports.xxx = value
      module.exports = value
    })

    //定义有依赖的模块
    define(function(require, exports, module){
      //引入依赖模块(同步)
      let module2 = require('./module2')
      //引入依赖模块(异步)
      require.async('./module3', function (m3) {
    })
    //暴露模块
      exports.xxx = value
    })
    ```

2. 引入模块
    ```js
    define(function (require) {
      let m1 = require('./module1')
      let m4 = require('./module4')
      m1.show()
      m4.show()
    })
    ``