
## abort event
abort event 是在资源未完全加载时触发，但不是由于错误导致

```js
// === 例子
const video = document.querySelector('video');
const videoSrc = 'https://path/to/video.webm';

video.addEventListener('abort', () => {
  console.log(`Abort loading: ${videoSrc}`);
});

const source = document.createElement('source');
source.setAttribute('src', videoSrc);
source.setAttribute('type', 'video/webm');

video.appendChild(source);
```