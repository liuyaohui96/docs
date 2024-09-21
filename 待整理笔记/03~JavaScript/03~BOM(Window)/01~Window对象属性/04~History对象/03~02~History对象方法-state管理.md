

## History对象方法-state管理
1. History.state 
2. History.pushState()
3. History.replaceState() 


## History.state
返回在 history 栈顶的state值，这是一个不用等待popstate事件查看state的方式


## History.pushState
调用 pushState() 后浏览器并不会立即加载这个URL，但可能会在稍后某些情况下加载这个URL，比如在用户重新打开浏览器时
```js
// state 当用户导航到新的state，popstate事件被触发，事件的state属性包含了这个state对象
// title 多数浏览器会忽略，为了保持未来的兼容性，大多数传递一个空字符串
// url url可以是绝对的，也可是相对的，但必须是同源的，否则pushState()会抛出异常
 // url参数是可选的，如果url参数忽略，则是设置为当前文档URL
history.pushState(state, title, url);
```

pushState() 与 设置 `window.location = "#foo"` 类似，二者都会在当前文档创建并激活新的历史记录。但 pushState() 具有如下几条优点：
1. 新的 URL 可以是与当前URL同源的任意URL 。而`window.location`只有在修改hash时，才认为在同一个文档
2. 如果不想改URL，就不用改。而`window.location = "#foo"`在当前哈希不是 #foo 时， 才能创建新的历史记录项。
3. 可以将任意数据和新的历史记录项相关联。而基于hash的方式，要编码相关数据为短字符串

注意 pushState() 绝对不会触发 hashchange 事件，即使新的URL与旧的URL仅哈希不同也是如此。


## History.replaceState() 
History.replaceState() 的使用与 history.pushState() 非常相似，区别在于  replaceState()  是修改了当前的历史记录项而不是新建一个。当需要响应某些用户操作而更新状态对象或当前历史记录条目的URL时，此方法特别有用。

```js
History.replaceState(state, title[,url])
```

## 例子
```js
// === 例子
let stateObj = { foo: 'bar' };
let stateObj2 = { foo: 'bar2' };
let stateObje3 = { foo: 'baz' };
history.pushState(stateObj, '', 'bar.html');
console.log(history.state); // {foo: bar}
// 修改当前state
history.replaceState(stateObj2, '', 'bar.html');
console.log(history.state); // {foo: bar2}

// URl发生改变
history.replaceState(stateObje3, '', 'baz.html');
console.log(history.state); // {foo: baz}
```