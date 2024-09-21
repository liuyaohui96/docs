//express启动一个后台服务
let express = require('./node_modules/express');
let app = express();

app.get('/say', (req, res) => {
  let { cb } = req.query; //获取传来的callback函数名，cb是key
  res.send(`${cb}('Hello liuyaohui!')`);
});
app.listen(3000, () => {
  console.log('server start');
});
