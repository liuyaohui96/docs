
## Window对象属性-窗口关系
1. Window.frameElement 
2. Window.frames
3. Window.length 
4. window.self
5. Window.parent
6. Window.top
7. Window.name
8. Window.opener

## Window.frameElement 
返回window嵌入到其中的元素。如果该窗口未嵌入到另一个文档中，或者该窗口所嵌入的文档具有不同的来源（例如位于不同的域中），则为null
```js
frameEl = window.frameElement;
```

## Window.frames
返回一个类数组对象,返回当前窗口的所有子框架元素
```js
// frameList是一个frame对象的集合，它类似一个数组,有length属性
  // 可以通过rameList[index]访问
frameList = window.frames
frameList === window // true
```

## Window.length
返回窗口中的 frames 数量

## window.self
返回当前窗口的引用
```js
window.self === window.window // true
```

## Window.parent
indow.parent 返回当前窗口的直接父对象

## Window.top
返回窗口层级最顶层窗口的引用

## Window.name 
获取/设置窗口的名称，经常用于窗口创建后修改窗口的名称，这不是必要的，因为窗口一般不需要name

## Window.opener
返回打开当前窗口的那个窗口的引用.
