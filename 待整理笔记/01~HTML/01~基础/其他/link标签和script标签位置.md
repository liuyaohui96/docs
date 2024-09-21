
## link标签和script标签位置
* 把`<link>`放在`<head>`中：防止呈现给用户空白的页面或没有样式的内容，可以让页面逐步呈现，提高用户体验
* 把`<script>`标签恰好放在`</body>`之前：把`<script>`标签放在底部，保证 HTML 首先完成解析，将页面尽早呈现给用户。例外情况是当你的脚本里包含`document.write()`时。但是现在，document.write()不推荐使用