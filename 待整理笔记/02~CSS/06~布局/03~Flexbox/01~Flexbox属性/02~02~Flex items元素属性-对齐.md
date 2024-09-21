
## Flex items 元素属性-对齐
1. align-self
2. justify-self

## align-self
align-self 用于为为指定单个flex item 设置cross axis的对齐方式，会覆盖flexbox container 设置的align-items的值，它的值与align-items相同，如下：
1. flex-start 在容器cross axis 方向的始端布局
2. flex-end 在容器cross axis 方向的末端布局
3. center 在容器cross axis 方向的中间布局
4. baseline：基线对齐，cross axis 起点到元素基线距离最大的子容器将会与交叉轴起始端相切以确定基线。
5. stretch: item沿交叉轴方向的尺寸拉伸至与父容器一致

```css
/* === align-self 像align-items一样的工作机制，不过它是作用在单个felxbox 项目上 */
align-self: flex-start | flex-end | center | baseline | stretch;
```

## justify-self
justify-self 为指定单个flex item设置main axis的对齐方式

```css
justify-self: center;     /* Pack item around the center */
justify-self: start;      /* Pack item from the start */
justify-self: end;        /* Pack item from the end */
justify-self: flex-start; /* Pack flex item from the start */
justify-self: flex-end;   /* Pack flex item from the end */
justify-self: self-start;
justify-self: self-end;
justify-self: left;       /* Pack item from the left */
justify-self: right;      /* Pack item from the right */
```
