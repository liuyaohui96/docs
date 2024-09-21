`npm i -D webpack webpack-cli html-webpack-plugin babel-loader @babel/core @babel/preset-env`


noParse 不要去解释某些包
```js
module.exports = {
  //...
  module: {
    noParse: /jquery|lodash/,
  }
};
```