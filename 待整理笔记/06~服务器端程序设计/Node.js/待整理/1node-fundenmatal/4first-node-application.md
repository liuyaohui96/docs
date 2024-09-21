1. 创建文件夹
    ```terminal
    // 查看node版本
    node --version

    // 创建新文件夹
    mkdir first-app

    // 进入新创建的文件夹
    cd first-app

    // 用vs code 打开
    code .

    ```
2. 创建app.js,书写第一个程序，在命令行使用`node app.js`
3. 特殊的
    ```JavaScript
    console.log(window); // reference error, window is not defined
    ```
    在node里，没有`doucment window`对象，在node我们内置对象与文件，与操作系统，与网络等进行工作