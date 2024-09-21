
## viewport meta 的需求
手机端与 PC 端视口存在差异，电脑端的视口宽度等于分辨率，而移动端的视口宽度跟分辨率没有关系,宽度默认值是设备厂家指定的，移动端视口通常设置为980px。

为什么设置为980px：因为当初iPhone推出并且人们开始在小手机屏幕上查看网站时，最初各个网站还没有来得及制作手机端网页，那么用户不得不用手机访问电脑版的网页，用手机访问电脑版网页的时候，绝大多数 PC 网页的布局宽度是980px，所以将移动端视口设置为980px，旁边刚好没有留白，不过页面缩放后文字会变得非常小，用户需要手动放大缩小才能看清楚，体验非常差。如果你遇到一个没有响应式设计的网站，今天仍然会看到这种情况。现在移动浏览器倾向于隐藏视口宽度

## viewport meta约束视口
为了解决上面的问题使用viewport进行视口设置：
* width=device-width：设置视口宽度为设备宽度，不设置的话默认为980px
* initial-scale=1.0：初始化的视口大小是1.0倍
* maximum-scale=1.0：最大的倍数是1.0倍
* user-scalable=no：不允许缩放视口

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<!-- 因此，您应该始终在文档的开头包含以下行 -->
<!-- viewport meta 告诉移动浏览器他们应该将视口的宽度设置为设备宽度，并将文档缩放到其预期大小的100％ -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

