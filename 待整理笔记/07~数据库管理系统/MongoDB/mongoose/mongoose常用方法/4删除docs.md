1. Model.deleteMany(Object[, projection][, options][, callback])

   - Object 条件
   - 删除所有符合条件的 doc
   - callback 只有一个 error 参数

2. Model.deleteOne(Object[, projection][, options][, callback])

   - 删除第一个符合条件的 doc
   - callback 只有一个 error 参数

3. Model.remove(Object[,callback])

   - 因为这个方法不会触发 middleware(中间件)，所以不赞成使用这个，请使用 deleteMany 或者 deleteOne
