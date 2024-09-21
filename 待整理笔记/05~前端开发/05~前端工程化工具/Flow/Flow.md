
## Flow
Flow 是Facebook 开源的一个javascript静态类型检测器，是javascript语言的超集

```js
// @flow
function square(n: number): number {
  return n * n;
}

square("2"); // Error!

// === 自动推断
// @flow
function square(n) {
  return n * n; // Error!
}

square("2");
```

## 为flow选择编译器 babel
```shell
# 
npm -i -D @babel/core @babel/cli @babel/preset-flow

yarn add -D @babel/core @babel/cli @babel/preset-flow
```
在.babelrc的设置文件进行配置

```json
{
  "presets": ["@babel/preset-flow"]
}
```

## 安装flow
```shell
# 安装
npm -i -D flow-bin
```
在package.json中的npm script 中增加以下内容

```json
// in package.json
"scripts": {
  "flow": "flow"
}
```

## 运行flow
```shell
## 首先进行初始化
npm run flow init

npm run flow

```