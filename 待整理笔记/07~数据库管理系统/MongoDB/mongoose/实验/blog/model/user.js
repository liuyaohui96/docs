const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    rqquired: true
  },
  password: {
    type: String,
    required: true
  },
  created_time: {
    type: Date,
    // 这里是方法的引用，而不是立刻调用
    default: Date.now
  },
  last_modified_time: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    default: '/public/img/avatar-default.png'
  },
  // bio 是个人简介的意思
  bio: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    // enum 枚举，只能是0和1，-1代表保密
    enum: [-1, 0, 1],
    default: -1 // 默认保密
  },
  birthday: {
    type: Date
  },
  // 账户状态
  state: {
    // 1不可以可以评论，2不可以登陆
    type: Number,
    enum: [0, 1, 2],
    default: 0 // 0 是正常状态
  }
});

module.exports = mongoose.model('User', userSchema);
