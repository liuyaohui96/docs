
## fileset & lengend
1. fildset
2. lengend


fieldset 元素通常用来对表单中的控制元素进行分组；lengend表示它的父元素`<fieldset>`的内容的标题
```html
<form action="test.php" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" id="radio"> <label for="radio">Click me</label>
  </fieldset>
</form>
```