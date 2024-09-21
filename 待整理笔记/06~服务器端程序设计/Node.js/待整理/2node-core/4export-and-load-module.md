1. export module
    ```JavaScript
    // 以对象形式export log
    module.exports.log=log;

    // 以函数形式export log
    module.exports=log;
    ```
2. load module
    ```JavaScript
    // load 的module不能修改，所以标识符使用const关键字
    const loggerr=require('path');

    logger.log(arguments);

    //--------------
    // 如果以函数形式export
    const log=require('path');
    log(arguments);
    ```
3. 使用`jshint 文件名` 可以查看javascript code 是否符合规范
# 原文
exports property, anythind we add to this , will be exported from this module