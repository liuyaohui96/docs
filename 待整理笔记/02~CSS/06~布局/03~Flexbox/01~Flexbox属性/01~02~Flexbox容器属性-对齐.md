
## Flexbox容器属性-对齐
1. justify-content
2. align-items
3. align-content


## jusify-content
justify-content 属性控制如何沿着flex container的 main axis分配空间，即flexbox item在main axis方向的对齐方式，它的值有：
1. flex-start 在容器main axis 方向的始端布局
2. flex-end 在容器main axis 方向的末端布局
3. center 在容器main axis 方向的中间布局
4. space-between 在容器main axis 方向上均匀分布，首尾两端的子容器与父容器相切
5. space-around 在容器main axis 方向上均匀分布，首尾两端的子容器到父容器的距离是子容器间距的一半

```css
justify-content: flex-start | flex-end | center | space-between |space-around
```

## align-items
align-items 属性控制弹性容器中成员在当前行内沿着cross axis对齐方式。它的值有：
1. flex-start 在容器cross axis 方向的始端布局
2. flex-end 在容器cross axis 方向的末端布局
3. center 在容器cross axis 方向的中间布局
4. baseline：基线对齐，cross axis 起点到元素基线距离最大的子容器将会与交叉轴起始端相切以确定基线。
5. stretch: 子容器沿交叉轴方向的尺寸拉伸至与父容器一致

```css
align-items: flex-start | flex-end | center | baseline | stretch;
```

## align-contents
align-contents属性控制多行弹性盒子容器成员在多行沿着cross axis的对齐方式。该属性无法作用于单行 (flex-wrap: no-wrap) 弹性盒子

```css
align-content: center;     /* 将项目放置在中点 */
align-content: start;      /* 最先放置项目 */
align-content: end;        /* 最后放置项目 */
align-content: flex-start; /* 从起始点开始放置flex元素 */
align-content: flex-end;   /* 从终止点开始放置flex元素 */
```


## align-items 和 align-contents的区别
适用对象：
1. align-items属性控制当前行的弹性盒子容器成员对齐方式
1. align-contents属性控制多行弹性盒子容器成员对齐方式