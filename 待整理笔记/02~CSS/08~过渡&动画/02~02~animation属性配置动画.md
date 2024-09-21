
## animation属性配置动画
SS animation 属性是 animation-name，animation-duration, animation-timing-function，animation-delay，animation-iteration-count，animation-direction，animation-fill-mode 和 animation-play-state 属性的一个简写属性形式，用于配置动画。

以下属性出现0次或1次
* `animation-timing-function` 
* `animation-iteration-count`
* `animation-direction`
* `animation-fill-mode`
* `animation-play-state`

`<time>`可能会出现0、1 或 2 次。第一个值被分配给animation-duration， 第二个分配给 animation-delay

```css
/* animation-duration 动画过程时间 */
/* animation-delay 动画开始延迟时间 */
/* animation-iteration-count: 1 | n | infinite 1 是默认的动画迭代次数 */
animation: <animation-name> <animation-duration> <animation-timing-function> <animation-delay> 
    <animation-iteration-count> <animation-direction> <animation-fill-mode> <animation-play-state>

```

## animation-timiing-function
1. ease 默认的动画函数
2. ease-in
3. ease-out
4. ase-in-out
5. step-start 动画立即跳至结束状态并停留在该位置，直到动画结束
6. step-end 动画将保持其初始状态直至结束，然后直接跳至最终位置
7. step()
```css
/* 使用steps函数，可以定义到达end的n个步骤 */
animation-timing-function: steps(4, end);
```

## animation-iteration-direction
```css
/* 
reverse 从最后一帧到第一帧迭代
alternate   1 -> n -> 1 -> ...
alternate-reverse n -> 1 -> n -> ...
 */
animation-iteration-direction: normal | reverse | alternate | alternate-reverse /* normal 是默认的 */
```

## animation-fill-mode
```css
/* 
动画执行前后如何为样式动画应用样式
none: default，动画未执行时，动画将不会将任何样式应用于目标，元素应用原来的样式; 运动结束后，回到起始位置，延迟情况下，样式延迟之后执行

forwards: 运动结束后，停留在终点，样式保留在动画结束时候的状态

backwards: 样式保留在第一帧中的状态

both: 遵顼forwards和backwards规则，在两个方向上应用
 */
animation-fill-mode: none | forwards | backwards | both
```

## animation-play-state
```css
/* 默认值是running，通常通过设置javascript设置animation-play-state切换动画状态 */
animation-play-state: running | paused
```