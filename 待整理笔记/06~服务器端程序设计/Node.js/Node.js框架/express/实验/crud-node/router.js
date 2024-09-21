let express = require('express');
let router = express.Router();

let fs = require('fs');
let student = require('./student');

// 渲染学生页面
router.get('/students', (req, res) => {
  student.find((err, students) => {
    if (err) res.status(500).render('server error');
    res.render(__dirname + '/views/index.html', {
      students: students
    });
  });
});

// 渲染添加页面

router.get('/students/new', (req, res) => {
  res.render(__dirname + '/views/new.html');
});

// 添加页面中处理添加请求
router.post('/students/new', (req, res) => {
  student.save(req.body, err => {
    if (err) res.status(500).send('server error');
    res.redirect('/students');
  });
});

// 渲染学生编辑页面
router.get('/students/edit', (req, res) => {
  // 根据学生id把学生信息查出来
  student.findId(parseInt(req.query.id), (err, student) => {
    if (err) return res.status(500).send('server error');
    res.render(__dirname + '/views/edit.html', {
      student: student
    });
  });
});

// 处理编辑请求
router.post('/students/edit', (req, res) => {
  console.log(req.body);
  // 根据id更新数据
  student.updateById(req.body, err => {
    if (err) res.status(500).send('server error');
    res.redirect('/students');
  });
});

// 渲染学生删除页面
router.get('/students/delete', (req, res) => {
  console.log(req.query);
  student.deleteById(req.query.id, err => {
    if (err) res.status(500).send('server error');
    res.redirect('/students');
  });
});

// 处理学生删除请求
router.post('/students/delete', (req, res) => {});

module.exports = router;
