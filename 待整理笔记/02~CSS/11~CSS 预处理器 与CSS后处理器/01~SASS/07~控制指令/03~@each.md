
## @each
```scss
@each $var in <list>

// === 例子
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}

.puma-icon {
  background-image: url('/images/puma.png');
}
.sea-slug-icon {
  background-image: url('/images/sea-slug.png');
}
.egret-icon {
  background-image: url('/images/egret.png');
}
.salamander-icon {
  background-image: url('/images/salamander.png');
}
```