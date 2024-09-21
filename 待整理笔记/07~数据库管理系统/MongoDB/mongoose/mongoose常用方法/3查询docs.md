查找 document 的方法， model 中有很多静态方法提供

1. find(Object[, projection][, options][, callback])

   - 返回查询结果，一个包含多个对象的数组
   - Object 是条件对象
   - 例子

     ```JS
     // named john and at least 18
     MyModel.find({ name: 'john', age: { $gte: 18 }});

     // executes, passing results to callback
     MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});
     ```

2. findById
   -
3. findOne(Object[, projection][, options][, callback])
   - 返回一个查询结果，一个对象
   - 如果你向根据`_id`查找，使用`findId()`作为代替
4. where
