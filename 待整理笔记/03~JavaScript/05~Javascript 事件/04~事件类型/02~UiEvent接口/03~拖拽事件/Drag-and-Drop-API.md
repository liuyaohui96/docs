1. 首先设置拖动元素是可拖动的， `draggable: true`
2. 当元素被拖动时，`ondragstart="callback(event)"`, callbak 里面规定了被拖动的数据，可以使用事件对象的 dataTransfer 使用 dataTranfer 属性容纳数据，`event.dataTransfer.setData("Text", event.target.id)`设定被拖数据的数据类型和值
3. onDragover 在需要放置的元素上设置，`ondragover="callback(event)"`, 因为默认是不允许放置元素的，需要阻止元素默认处理方式
4. 当放置元素时，触发 ondrop 事件函数`onDrop="callback(event)`
   - 因为 drop 事件是以链接形式打开，需要避免元素默认行为
   - 使用`let child=event.dataTransfer.getData("Text")`
   - 使用`event.target.appendChild(child)`增加到元素内
