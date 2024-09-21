1.  什么是 schema
    - shcema 是映射到集合，是集合中的 document 的形状定义
2.  创建 schema

    - 例子

      ```JS
      const mongoose = require('mongoose');
      const Schema = mongoose.Schema;

      let schema = new Schema({
        title:  String,
        author: String,
        body:   String,
        comments: [{ body: String, date: Date }],
        ...
      });
      ```

    - 集合的结构类型，约束的目的是为了保证数据完整性

3.  使用 schema

    - 例子

      ```JS

        var Blog = mongoose.model('Blog', schema);
      ```
