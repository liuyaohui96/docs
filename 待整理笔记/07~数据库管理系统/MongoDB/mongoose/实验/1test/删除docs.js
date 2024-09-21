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

Admin.deleteMany({ username: 'zhangsan' }, err => {
  if (err) console.log(err);
});
