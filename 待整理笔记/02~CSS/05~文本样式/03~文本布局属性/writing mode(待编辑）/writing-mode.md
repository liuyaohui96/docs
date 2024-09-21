
## writing mode
writing-mode 属性定义了块级元素中文本的在水平和垂直方向上的行进方向
```css
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;
```

如果writing-mode 是horizontal-tb
1. block 盒子从上到下布局
2. inline 盒子从左到右布局

如果writeg-mode 是垂直模式
1. block 盒子从左到右布局
2. inline盒子从上到下布局

同样的在水平模式下切换到垂直模式下，属性设置都会进行相应的颠倒