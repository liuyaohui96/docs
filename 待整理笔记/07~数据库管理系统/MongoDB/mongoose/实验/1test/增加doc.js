const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true });

let userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true // 必须要有
  }
});

let Admin = mongoose.model('Admin', userSchema);

let liu = new Admin({
  username: 'zhangsan',
  password: '12345'
});

liu.save((err, ret) => {
  if (err) console.log(err);
  else console.log(ret);
});
