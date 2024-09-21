# fs

1.  加载 file system 模块

    ```JS
    let fs=require('fs');
    ```

2.  读取文件

    - fs.readFile(path[, options], callback);
      - path 读取的文件路径
      - options 可选的如 encoding
      - callback 回调函数 有 err 和 data 两个参数
        - 读取成功，err 是 null，data 是读取的数据
        - 如果失败，data 是 null，err 是错误对象
        - data 是十六进制数据，可以使用 data.toStirng()返回我们认识的字符串
    - 例子

      ```JS
      let fs = require('fs');

      fs.readFile('./1.md', (err, data) => {
      if (err) throw err;
      console.log(data.toString());
      });
      ```

3.  写文件

    - fs.writeFile(file, data, option, callback);

      - file 文件路径。文件不存在，则新建；文件存在，用 data 覆盖原来的内容
      - data 数据
      - option 可选，如 encoding
      - callback 回调函数，一个 err 参数
        - err
          - 正确为 null
          - 错误为错误对象
      - 例子

        ```JS
        let fs = require('fs');

        let data = 'hello world';
        fs.writeFile('./test.txt', data, err => {
        if (err) throw err;
        });

        ```

4.  读取目录下的文件和目录

    - fs.readdir(path[,option], callback) 注意这里 dir 的 d 不是大写
      - path 读取的目录路径
      - option 可选，如 encoding
      - callback 回调函数，有两个参数 err 和 files
        - 同样，读取错误，err 是错误对象，files 为空
        - 读取成功，err 是 null，files 是文件对象
