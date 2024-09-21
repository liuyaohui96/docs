1. `mongo` 打开数据库后台管理
2. `exit` 退出数据库后台管理
3. `show dbs` 查看当前的所有数据库
4. `db` 查看当前操作的数据库
5. `use <db-name>` 切换到指定数据库，如果还没有创建，当插入了数据后，就会自动创建
6. 当用 use 切换到相应的数据库 `show collections` 查看当前所有集合
   - colleaction 就是一个数组
7. 用 use 切换到要删除的数据库，使用`db.dropDatabase()`
8. 用 use 切换到要删除的数据库, 删除数据库的集合(collection),使用`db.<collection-name.drop()>`
9. 插入数据

   - `db.<collection-name>.insertOne(obj)`

10. 查询数据
    - `db.<colleaction-name>.find()` 查找所有的数据
