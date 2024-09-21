
## Media queries in JavaScript
通过MediaQueryList 接口提供的属性和方法，可以程序式地匹配media query 的结果

MediaQueryList接口属性和方法：
1. 属性
    * MediaQueryList.matches ：MediaQueryList接口的matchs只读属性是一个布尔值，如果文档当前与媒体查询列表匹配，则返回true，否则返回false
    * MediaQueryList.media: 将媒体查询以序列化的DOMString返回
2. 方法
    * MediaQueryList.addListener()：medaiQueryList 对象添加一个监听器，当media query 状态发生改变，该监听器将运行自定义回调函数
    * MediaQueryList.removeListener()：medaiQueryList 对象移除监听器

MediaQueryList接口参考：https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList

## medai query的编程实现

1. 创建MediaQueryList对象
    ```js
    let mediaQueryList = window.matchMedia("(orientation: portrait)");
    ```
2. 检测media query的结果
    ```js
    if (mediaQueryList.matches) {
    /* The viewport is currently in portrait orientation */
    } else {
    /* The viewport is not currently in portrait orientation, therefore landscape */
    }
    ```

3. 接受media query 通知。持续观察查询结果值的变化,需要在MediaQueryList对象上使用 addListener() 方法。
    ```js
    let mediaQueryListObj = window.matchMedia("(orientation: portrait)");
    mediaQueryListObj.addListener(handleOrientationChange);
    ```
4. 终止media query 通知。在MediaQueryList 对象上调用removeListener() 方法来移除监听
    ```js
    mediaQueryListObj.removeListener(handleOrientationChange);
    ``

