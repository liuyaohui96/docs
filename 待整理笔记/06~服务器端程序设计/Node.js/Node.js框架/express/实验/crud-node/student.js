let dbPath = __dirname + '/db.json';
let fs = require('fs');

// 只负责处理学生数据
// readFile 是异步操作，要想获取异步的结果，必须使用回调函数
/*
find((err, data) =>{...})
*/
exports.find = callback => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return callback(err);
    let students = JSON.parse(data).students;
    callback(null, students);
  });
};

// findID
/*
findId(id, (err, student)=>{...})
 */
exports.findId = (id, callback) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return callback(err);
    let students = JSON.parse(data).students;
    // 比查找所有多了个筛选条件
    let student = students.find(item => item.id === id);
    callback(null, student);
  });
};

// 保存，处理学生数据的增加
/*
save(student, (err)=>{...})
*/
exports.save = (student, callback) => {
  // 获取数据
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return callback(err);

    // 转化为对象,取出里面的数组
    let students = JSON.parse(data).students;
    // 为参数student增加一个id

    student.id =
      students.length == 0 ? 1 : students[students.length - 1].id + 1;

    // 将student增加到students中
    students.push(student);

    //转换为json字符串
    let stuJson = JSON.stringify({
      students: students
    });

    // 写进文件中
    fs.writeFile(dbPath, stuJson, err => {
      if (err) return callback(err);
      // 成功则设置错误对象为nul
      callback(null);
    });
  });
};

// 更新
/*
updateById({
  id:1,
  name:'',
  age: 11
}, (err) => {});
*/
exports.updateById = (student, callback) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return callback(err);
    let students = JSON.parse(data).students;

    // 请求体的id是字符串，要将它转换过来
    student.id = parseInt(student.id);

    // 找到要更新的student
    let stu = students.find(item => item.id === student.id);
    for (let key in student) {
      stu[key] = student[key];
    }

    //对象转化为json字符串
    let stuJson = JSON.stringify({
      students: students
    });
    // 将json字符串保存到文件
    fs.writeFile(dbPath, stuJson, err => {
      if (err) return callback(err);
      callback(null);
    });
  });
};

// 删除
/*
deleteById(id, (err)=>{...})
*/
exports.deleteById = (id, callback) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return callback(err);

    // 获取jOSN对象
    let students = JSON.parse(data).students;

    // 删除元素，获取指定元素下标
    // 在数组中删除指定下标元素
    let deleteIndex = students.findIndex(item => item.id === parseInt(id));
    students.splice(deleteIndex, 1);

    // 重新写进，先转JSON字符串,再写进json

    //对象转化为json字符串
    let stuJson = JSON.stringify({
      students: students
    });
    // 将json字符串保存到文件
    fs.writeFile(dbPath, stuJson, err => {
      if (err) return callback(err);
      callback(null);
    });
  });
};
