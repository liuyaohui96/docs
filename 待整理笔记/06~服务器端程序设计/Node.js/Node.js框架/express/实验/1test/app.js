let express = require('express');

let app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('<h1>hello express</h1>');
});

app.get('/about', (req, res) => {
  res.send('hello express');
});

app.listen(5500, () => {
  console.log('server start...');
});
