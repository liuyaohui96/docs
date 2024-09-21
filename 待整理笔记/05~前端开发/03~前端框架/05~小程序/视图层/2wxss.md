## 尺寸单位
rpx（responsive pixel）: 可以根据屏幕宽度进行自适应

## 样式导入
@import语句可以导入外联样式表，@import后跟需要导入的外联样式表的相对路径
```css
@import "common.wxss";
```

## 内联样式
支持使用 style、class 属性来控制组件的样式

## 选择器
支持的选择器有限

## 全局样式与局部样式
app.wxss 中的样式为全局样式，作用于每一个页面。在 page 的 wxss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 app.wxss 中相同的选择器