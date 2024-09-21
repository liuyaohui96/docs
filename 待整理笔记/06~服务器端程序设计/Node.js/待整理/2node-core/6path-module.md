我的总结
1. `file system, HTTP, OS, Path, Process, Query Strings, Stream`是常用的必须掌握的内置module
2. 对于path module
    ```JavaScript
    const path = require('path'); // 如果不是内置模块的，在本文件查找

    // basename
    path.basename(path[, extension]);
    path.basename('/foo/bar/baz/asdf/quux.html');
    // Returns: 'quux.html'

    path.basename('/foo/bar/baz/asdf/quux.html', '.html');
    // Returns: 'quux'

    //-----------dirname
    path.dirname(path);
    path.dirname('/foo/bar/baz/asdf/quux');
    // Returns: '/foo/bar/baz/asdf'

    // -----others
    path.extname(path);
    ```


# 原文
hightlight a few very useful modules that you should be aware of

e.g file system, HTTP, OS, Path, Process, Query Strings, Stream

the argument that we gave to this require function, no assume that this is a built in module,
if it is no built in module by the name speciifed here, node looks for the existence of arelative path
to a file in this application

the `parse()` method