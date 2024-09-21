## 数据绑定
```html
<!--wxml-->
<view> {{message}} </view>
```
```js
Page({
  data: {
    message: 'Hello MINA!'
  }
})
```

## 条件渲染
```html
<view wx:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>
```
```js
// page.js
Page({
  data: {
    view: 'MINA'
  }
})
```


## 列表渲染
```html
<!--wxml-->
<view wx:for="{{array}}"> {{item}} </view>
```
```js
// page.js
Page({
  data: {
    array: [1, 2, 3, 4, 5]
  }
})
```


## 模板
```html
<!--wxml-->
<template name="staffName">
  <view>
    FirstName: {{firstName}}, LastName: {{lastName}}
  </view>
</template>
<template is="staffName" data="{{...staffA}}"></template>
```

```js
// page.js
Page({
  data: {
    staffA: {firstName: 'Hulk', lastName: 'Hu'}
  }
})
```