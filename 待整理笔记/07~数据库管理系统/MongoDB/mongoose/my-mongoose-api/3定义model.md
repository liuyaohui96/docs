# 建立schema 接口
Models are defined through the Schema interface
```js
const Comment = new mongoose.Schema({
  name: { type: String, default: 'hahaha' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer
});
```

# 创建model
const MyModel = mongoose.model('Ticket', mySchema);

# 创建model实例
const instance = new MyModel();