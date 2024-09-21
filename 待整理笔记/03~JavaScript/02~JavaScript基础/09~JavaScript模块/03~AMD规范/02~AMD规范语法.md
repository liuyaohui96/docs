
## AMD规范语法

1. 定义模块
    ```js
    //定义没有依赖的模块
    define(function(){
      return 模块
    })

    // 定义有依赖的模块
    define(['module1', 'module2'], function(m1, m2){
        return 模块
    })
    ```

2. 引入模块
    ```js
    require(['module1', 'module2'], function(m1, m2){
       // 使用m1/m2
    })
    ```