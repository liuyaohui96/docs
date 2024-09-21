
## page visibility api
页面可见性 API提供了您可以观察的事件，以便了解文档何时可见或隐藏，以及查看页面当前可见性状态的功能

页面可见性 API对于节省资源和提高性能特别有用，它使页面在文档不可见时避免执行不必要的任务
```js
// boolean 值表示页面是否隐藏
document.hidden

/*
有四种可能的状态值
'visible' : 页面内容至少是部分可见. 即此页面在前景标签页中，并且窗口没有最小化
'hidden' : 此时页面对用户不可见. 即文档处于背景标签页或者窗口处于最小化状态，或者操作系统正处于 '锁屏状态'
'prerender' : 页面此时正在渲染中, 因此是不可见的 (considered hidden for purposes of document.hidden). 文档只能从此状态开始，永远不能从其他值变为此状态
unloaded:　页面从内存中卸载清除
*/
document.visibilityState
```

## visibilitychange
当用户最小化窗口或切换到另一个选项卡时，API会发送visibilitychange事件，让监听者知道页面状态已更改。你可以检测事件并执行某些操作或行为不同。例如，如果您的网络应用正在播放视频，则可以在用户将标签放入背景时暂停视频，并在用户返回标签时恢复播放

## 使用场景
* 网站有图片轮播效果，只有在用户观看轮播的时候，才会自动展示下一张幻灯片
* 显示信息仪表盘的应用程序不希望在页面不可见时轮询服务器进行更新
* 页面想要检测是否正在渲染，以便可以准确的计算网页浏览量
* 当设备进入待机模式时，网站想要关闭设备声音（用户按下电源键关闭屏幕）

## 简单例子
```js
let video = document.querySelector('video');
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    video.pause();
  } else {
    video.play();
  }
});
video.addEventListener('pause', function() {
  document.title = '视频已经暂停';
});
video.addEventListener('play', function() {
  document.title = '视频正在播放';
});
```