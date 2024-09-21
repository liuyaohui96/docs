# path

1. path.extname(path)

   - path 文件路径
   - 返回文件扩展名
   - 例子

     ```JS
     let path=require('path');
     path.extname('1.html'); // '.html'

     path.extname('.html'); // '' 第一个字符为. 返回空
     path.extname('html'); // '' 没有. 返回空
     ```

2. path.join([...paths])

   - 参数为多个 path 片段
   - 将多个路径字符串连接
   - 这个方法很强大，可以避免拼接字符串的错误

3. path.basename(path[, ext])

   - path 文件路径
   - ext 文件扩展名
   - 返回 path 的最后的部分，即文件部分，如果指定了相应的 ext，则返回值不包括该 ext

     ```JS
     path.basename('/foo/bar/baz/asdf/quux.html');
     // Returns: 'quux.html'

     path.basename('/foo/bar/baz/asdf/quux.html', '.html');
     // Returns: 'quux'
     ```

4. path.dirname(path)

   - path 文件路径
   - 返回 path 中的目录部分
     ```JS
     path.dirname('/foo/bar/baz/asdf/quux');
     // Returns: '/foo/bar/baz/asdf'
     ```

5. path.isAbsolute(path)

   - path 文件路径
   - 判断文件路径是否是绝对路径

6. path.parse(path)

   - path 为文件路径
   - 返回对象，包括以下属性

     - dir 字符串类型
     - root 字符串类型
     - base 字符串类型
     - name 字符串类型
     - ext 字符串类型

   - 例子
     ```jS
     path.parse('/home/user/dir/file.txt');
     // Returns:
     // { root: '/',
     //   dir: '/home/user/dir',
     //   base: 'file.txt',
     //   ext: '.txt',
     //   name: 'file' }
     ···
     ```
