let mysql = require('mysql');
let http = require('http');
let url = require('url');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let username = url.parse(req.url, true).query.username;
    let isExists;
    findName(username, result => {
      if (result) {
        res.write(`welcome ${username}`);
        res.end();
      } else {
        res.write(`${username} is not exist!`);
        res.end();
      }
    });
  })
  .listen(5500, 'localhost', () => {
    console.log('listen port 5500...');
  });

function findName(username, callback) {
  let con = createMysqlCon();
  con.connect(err => {
    if (err) throw err;
    let sql = `select name from users`;
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      callback(result.some(item => item.name == username));
    });
  });
}

// 用于创建数据库连接
function createMysqlCon() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'abc123456',
    database: 'test'
  });
}
