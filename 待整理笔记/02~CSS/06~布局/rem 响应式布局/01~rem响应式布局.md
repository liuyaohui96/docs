
## rem响应式布局
rem 布局（等比缩放布局）。根据动态设置设置根元素HTML的font-size实现响应式布局

rem响应式布局步骤
1. 拿到 PSD 设计稿后，给HTML根元素设置一个 font-size 的值，一般设置一个容易计算的值，如100px
    ```js
    html{
      font-size:100px;//1rem=100px
    }
    ```

2. 将设计稿中的像素值转换为rem值，这里将像素值除以100就可以得到rem值，实际开发中一般通过自动转换工具将px转换为rem，如px to rem


3. 根据当前屏幕的宽度和设计稿的宽度来计算我们 HTML 的 font-size 的值
    ```shell
    # 设计稿宽度为 640px
    # 手机屏幕宽度为 iphone6（375px）
    375/640*100 = 58.59375
    ```
    所以，自动计算HTML 的font-size值为
    ```js
    let designWidth = 640; // 设计稿宽度
    let deviceWidth = document.documentElement.clientwidth; // 设备宽度
    let ratio = deviceWidth/deviceWidth;
    document.documentElemnt.fontSize = ratio * 100 + 'px'
    ```