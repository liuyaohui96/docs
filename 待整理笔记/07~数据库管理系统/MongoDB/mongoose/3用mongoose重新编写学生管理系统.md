详细总结尚未整理，可以查看实验 `crud-node` 进一步整理

1. mongoose 的 id 的 key 为 `_id`

2. `_id` 和 id
   schema 会默认设置一个\_id 属性，类型是 ObjectId，还默认设置一个 id 的 getter 方法,返回 \_id 字段的十六进制字符串
