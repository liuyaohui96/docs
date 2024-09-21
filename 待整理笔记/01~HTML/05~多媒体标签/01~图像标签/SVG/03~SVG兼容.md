
## SVG兼容
1. 对于不支持SVG（IE 8及更低版本，Android 2.3及更低版本）的浏览器，您可以从src属性引用PNG或JPG，并使用srcset属性 只有最近的浏览器才能识别）来引用SVG。 在这种情况下，仅支持浏览器将加载SVG - 较旧的浏览器将加载PNG
    ```html
    <img src="equilateral.png" alt="triangle with equal sides" srcset="equilateral.svg">
    ```

2. 使用SVG图片作为背景图像的兼容方式
    ```css
    background: url("fallback.png") no-repeat center;
    background-image: url("image.svg");
    background-size: contain;
    ```