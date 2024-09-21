1. 导入 `const mongoose = require('mongoose')`
2. 连接 MongoDB 数据库 `mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});`
   - 指定的数据库不必存在，当插入第一条数据后，自动创建
3. 创建一个模型，即设计一个数据库。这个步骤可以描述为，设计 schema，构造 model

   - `const Cat = mongoose.model('Cat', { name: String })`
   - 希望这个模型中的存储的文档，有一个 name，name 的要求是字符串
   - 这叫集合结构
   - 集合结构还可以通过 Schema 设计

4. 实例化模型

   - `const kitty = new Cat({ name: 'Zildjian' })`

5. 持久化保存实例
   - `kitty.save().then(() => console.log('meow'));`
   - 例子
     ```JS
     kitty.save((err, ret) => {
        if(err) console.log(err);
        else console.log(ret);
     })
     ```
