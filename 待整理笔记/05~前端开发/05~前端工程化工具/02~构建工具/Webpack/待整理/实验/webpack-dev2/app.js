const express = require('express');
const webpack = require('webpack');
const webpackMiddle = require('webpack-dev-middleware');

let app = express();

app.listen(5500, () => {
  console.log('server start');
});

app.get('/user', (req, res) => {
  res.json({ name: 'liuyaohui' });
});

//
let config = require('./webpack.config');
let compiler = webpack(config);
app.use(webpackMiddle(compiler));
