
## @while
@while 指令重复输出格式直到表达式返回结果为 false。这样可以实现比 @for 更复杂的循环，只是很少会用到
```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}

// 编译结果为
.item-6 {
  width: 12em;
}

.item-4 {
  width: 8em;
}

.item-2 {
  width: 4em;
}

```