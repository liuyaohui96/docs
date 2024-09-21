let express = require('express');

let app = express();

app.get('/say', (req, res) => {
  let { wd, cb } = req.query;
  res.end(`${cb}('hello world')`);
});

app.listen(5500, () => {
  console.log('server start...');
});
