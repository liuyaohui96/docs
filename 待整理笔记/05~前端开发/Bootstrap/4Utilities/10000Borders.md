[0.0]: #Borders
[1.0]: #basic-border
[2.0]: #border-color
[3.0]: #border-radius
[4.0]: #

# Borders
1. [basic border][1.0]
2. [border color][2.0]
3. [border radius][3.0]
## basic border
* use `border`, `border-*`, `border-0`, `border-*-0` set the `border`
```SCSS
.border         { border: $border-width solid $border-color !important; }
.border-top     { border-top: $border-width solid $border-color !important; }
.border-right   { border-right: $border-width solid $border-color !important; }
.border-bottom  { border-bottom: $border-width solid $border-color !important; }
.border-left    { border-left: $border-width solid $border-color !important; }

.border-0        { border: 0 !important; }
.border-top-0    { border-top: 0 !important; }
.border-right-0  { border-right: 0 !important; }
.border-bottom-0 { border-bottom: 0 !important; }
.border-left-0   { border-left: 0 !important; }
```
#### [⬆ Back to top][0.0]


## border color
* Firstly, use basic border
* `.border-*` and `borde-white` set border color
```SCSS
@each $color, $value in $theme-colors {
  .border-#{$color} {
    border-color: $value !important;
  }
}

.border-white {
  border-color: $white !important;
}


```
#### [⬆ Back to top][0.0]


## border radius
* `rounded`, `rounded-top`, `rounded-right`, `rounded-bottom`, `rounded-left` set specify corner's `border-radius` to `.25rem`

* `rounded-circle` set `border-radius: 50%`, `rounded-pill` set `border-radius: 50rem`

* `rounded-0` set `border-radius: 0`
```SCSS
// $border-radius: .25rem
.rounded {
  border-radius: $border-radius !important;
}
.rounded-top {
  border-top-left-radius: $border-radius !important;
  border-top-right-radius: $border-radius !important;
}
.rounded-right {
  border-top-right-radius: $border-radius !important;
  border-bottom-right-radius: $border-radius !important;
}
.rounded-bottom {
  border-bottom-right-radius: $border-radius !important;
  border-bottom-left-radius: $border-radius !important;
}
.rounded-left {
  border-top-left-radius: $border-radius !important;
  border-bottom-left-radius: $border-radius !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: $rounded-pill !important;
}

.rounded-0 {
  border-radius: 0 !important;
}
```
#### [⬆ Back to top][0.0]