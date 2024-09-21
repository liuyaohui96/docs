
## @for
```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

// 编译结果为
.item-1 {
  width: 2em; 
}
.item-2 {
  width: 4em; 
}
.item-3 {
  width: 6em; 
}
```