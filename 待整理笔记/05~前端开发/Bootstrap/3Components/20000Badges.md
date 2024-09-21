[0.0]: #Badges
[1.0]: #base-badge
[2.0]: #badge-color
[3.0]: #badge-in-button
[4.0]: #pill-badge

[1]: https://823406519.github.io/Bootstrap/Appendix/3Components-1-Badges.html
[2]: ../Appendix/3Components-1-Badges.html

# Badges
See rendering result [badge.html][1]

See source code [badge.html][2]

1. [base-badge][1.0]
2. [badge color][2.0]
3. [badge in button][3.0]
4. [pill badge][4.0]
   
## base badge
* `.badge` set `display: inline-block`, set `padding`, `font-size` use percetage unit, `font-weight`, `line-height`, `text-align`, `vertical-align`, `white-space`,`border-radius`
* `.badge` will automatically set the style of badge inlink because `a.badge` set `text-decoration: none` to hover and focus state.
* `badge:empty` set `display: none`
```SCSS
.badge {
  display: inline-block;
  padding: $badge-padding-y $badge-padding-x; // .25em .4em
  font-size: $badge-font-size; // 75%
  font-weight: $badge-font-weight; // 700
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  @include border-radius($badge-border-radius); // .25rem

  @at-root a#{&} {
    @include hover-focus {
      text-decoration: none;
    }
  }

  // Empty badges collapse automatically
  &:empty {
    display: none;
  }
}

-----------------
// avariable
$badge-font-size:                   75% !default;
$badge-font-weight:                 $font-weight-bold !default;
$badge-padding-y:                   .25em !default;
$badge-padding-x:                   .4em !default;
$badge-border-radius:               $border-radius !default;
```
#### [⬆ Back to top][0.0]


## badge color
* Firstly, use `badge`
* `.badge-*` use `badge-variant` to set `color`, `background-color`. Color use function `color-yiq()` to get `$black` or `#white` color.
* `.bage-*` will automatically set the style to badge in link becase of `a.badge-*` set `color`, darken `background-color` of hover and focus state. Color use function `color-yiq()` to get `$black` or `#white` color.
```SCSS
@each $color, $value in $theme-colors {
  .badge-#{$color} {
    @include badge-variant($value);
  }
}

// set `color` `background-color`
@mixin badge-variant($bg) {
  color: color-yiq($bg);
  background-color: $bg;

  @at-root a#{&} {
    @include hover-focus {
      color: color-yiq($bg);
      background-color: darken($bg, 10%);
    }
  }
}

-----------------
// function
// color-yiq, return `$dark` or `$light`
@function color-yiq($color, $dark: $yiq-text-dark, $light: $yiq-text-light) {
  $r: red($color);
  $g: green($color);
  $b: blue($color);

  $yiq: (($r * 299) + ($g * 587) + ($b * 114)) / 1000;

  @if ($yiq >= $yiq-contrasted-threshold) { // $yiq>=150
    @return $dark;
  } @else {
    @return $light;
  }
}

-----------
// variables
$yiq-contrasted-threshold:  150 !default;
```
#### [⬆ Back to top][0.0]



## badge in button
* Firstyl, use 'badge`
* If the badge is in button, it will automatically apply the style: `position: relative`, `top: -1px`.
```SCSS
.btn .badge {
  position: relative;
  top: -1px;
}
```
#### [⬆ Back to top][0.0]


## pill badge
* First, use `.badge`
* `badge-pill` reset `padding-x`, `padding-y`, `border-radius`
```SCSS
.badge-pill {
  padding-right: $badge-pill-padding-x; // .6rem
  padding-left: $badge-pill-padding-x; // .6rem
  @include border-radius($badge-pill-border-radius); // 10rem
}

---------------
// variables
$badge-pill-padding-x:              .6em !default;
$badge-pill-border-radius:          10rem !default;
```
#### [⬆ Back to top][0.0]