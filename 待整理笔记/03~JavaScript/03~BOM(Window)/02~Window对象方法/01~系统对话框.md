
## Window对象方法-系统对话框
1. Window.alert()
2. Window.confirm()
3. Window.prompt()

对话框是弹出式，直到这个对话框被点击后, 后面的脚本才会运行. 请勿滥用此功能

## Window.alert()
显示一个有指定内容和ok按钮的警告对话框
```js
// message 可选
window.alert(message);
```

## Window.confirm()
window.confirm(message) 显示modal 对话框，具有指定内容和两个button：ok 和cancel

```js
// message 可选
// result 点击ok按钮返回true，点击cancel按钮返回false
result = window.confirm(message);
```

## Window.prompt()
显示带有可选消息的对话框，提示用户输入一些文本
```js
// message 可选，要显示给用户的文本字符串
// default 可选，文本输入字段中显示的默认值的字符串
result = window.prompt(message, default);
```