## HTML5音频标签
`<audio>` 标签 用于在文档中嵌入音频资源

常用属性：
* src属性：指定视频资源的路径
* controls：控制按钮
* autoplay：自动播放
* loop：循环
* muted：静音
* preload 页面加载时预加载

* volume：音频播放的音量。值从0.0 (无声) 到 1.0 (最大声)

> 由于其并没有视觉部件，`<audio>` 标签不支持 width/height 属性和poster 属性
```html
<audio src="/assets/Hal.mp3" controls></audio>

<audio controls>
  <source src="viper.mp3" type="audio/mp3">
  <source src="viper.ogg" type="audio/ogg">
  <p>你的浏览器不支持 HTML5 音频，可点击<a href="viper.mp3">此链接</a>收听。</p>
</audio>
```