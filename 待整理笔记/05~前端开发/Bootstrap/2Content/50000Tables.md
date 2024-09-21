[0.0]: #Tables
[1.0]: #basic-table
[2.0]: #small-table
[3.0]: #caption
[4.0]: #head-option
[5.0]: #border-table
[6.0]: #borderless-table
[7.0]: #striped-table
[8.0]: #hover-table
[9.0]: #dark-table
[10.0]: #table-row-background
[11.0]: #responsive-table

[1]: ../4Utilities/40000Color.md#text-color
[2]: ../4Utilities/40000Color.md#background-color

[3]: 14000Tables.md

[01]: https://823406519.github.io/Bootstrap/Appendix/2Content-3-Tables.html
[02]: ../Appendix/2Content-3-Tables.html

# Tables
See rendering result [tables.html][01]

See source code [tables.html][02]

1. [basic table][1.0]
2. [small table][2.0]
3. [caption][3.0]
4. [head option][4.0]
5. [border table][5.0]
6. [borderless table][6.0]
7. [striped table][7.0]
8. [hover table][8.0]
9. [dark table][9.0]
10. [table row background][10.0]
11. [responsive table][11.0]

## basic table
* Use `.table`, we set `<th>` and `<td>` with `padding`, `border-top`, `vertical-align`.
* Use `.table`, we reset `<th>` in  `<thead>` with ` vertical-align`, and set `border-bottom`.
* Use `.table` , we set the nested `<tbody>` with `boder-top`.
```SCSS
.table {
  width: 100%;
  margin-bottom: $spacer; // 1rem

  // Reset for nesting within parents with `background-color`.
  background-color: $table-bg; // transparent

  th,
  td {
    padding: $table-cell-padding; //.75rem
    vertical-align: top;

    // 1px solid $gray-300
    border-top: $table-border-width solid $table-border-color;
  }

  thead th {
    vertical-align: bottom;

    // double border in `<thead> <th>`
    // 2px solid $gray-300
    border-bottom: (2 * $table-border-width) solid $table-border-color;
  }

  // double border in nested `<tbody>`  
  tbody + tbody {
    // 2px solid $solid  
    border-top: (2 * $table-border-width) solid $table-border-color;
  }

  .table {
    background-color: $body-bg; // white
  }
}

-------------------
// variables
$table-cell-padding:          .75rem !default;

$table-bg:                    transparent !default;

$table-border-width:          $border-width !default;
$table-border-color:          $gray-300 !default;
```
#### [⬆ Back to top][0.0]


## small table
* Firstly, use `.table`
* Use `.table-sm`, set `padding` more smaller.
```SCSS 
.table-sm {
  th,
  td {
    padding: $table-cell-padding-sm; // .3rem
  }
}

-------------------
// variables
$table-cell-padding-sm:       .3rem !default;
```
#### [⬆ Back to top][0.0]


## caption
caption style define in `reboot.scss`

See [caption][3]
#### [⬆ Back to top][0.0]


## head option
* Firstly, we should use `.table`
* `thead-dark` set `color`, `background-color`, `border-color`
* `thead-light` also like `thead-dark`
```SCSS
.table {
  .thead-dark {
    th {
      color: $table-dark-color; // white
      background-color: $table-dark-bg; // $900
      border-color: $table-dark-border-color; //lighten($gray-900, 7.5%)
    }
  }

  .thead-light {
    th {
      color: $table-head-color; // $gray-700
      background-color: $table-head-bg; // $gray-200

      // the same as `.table`
      border-color: $table-border-color; // $gray-300
    }
  }
}

--------------
// variables
$table-head-bg:               $gray-200 !default;
$table-head-color:            $gray-700 !default;

$table-dark-bg:               $gray-900 !default;
$table-dark-accent-bg:        rgba($white, .05) !default;
$table-dark-hover-bg:         rgba($white, .075) !default;
$table-dark-border-color:     lighten($gray-900, 7.5%) !default;
$table-dark-color:            $body-bg !default;
```
#### [⬆ Back to top][0.0]


## border table
* Fistly, use `.table`
* Use `.table-bordered` set `border` around `<table>`, `<th>` and `<td>`, set `<th>` or `<td>` in `<thead>` has double `border`.
```SCSS
.table-bordered {
  // 1px solid $gray-300
  border: $table-border-width solid $table-border-color;

  th, td {
    // 1px solid $gray-300
    border: $table-border-width solid $table-border-color;
  }

 // only in `<thead>`, `<th>` and `<td>` has double width border   
  thead {
    th, td {
      border-bottom-width: (2 * $table-border-width);
    }
  }
}
```
#### [⬆ Back to top][0.0]


## borderless table
* Firstly, use `.table`
* Use `.table-borderless` set `<th>`, `<td>`, `<thead> <th>`, nested `<tbody>` to `border: 0`
```SCSS
.table-borderless {
  th,
  td,
  thead th,
  tbody + tbody {
    border: 0;
  }
}
```
#### [⬆ Back to top][0.0]


## striped table
* Firstly use `.table`
* Use `table-striped` set `tbody tr:nth-of-type-odd` have other `background-color`
```SCSS
.table-striped {
  // must have `<tbody>`
  tbody tr:nth-of-type(#{$table-striped-order}) {// odd
    
    // because of opacity is every small, so it mostly like `white`
    background-color: $table-accent-bg; // rgba($black, .05)
  }
}

-----------
// variables
$table-accent-bg:             rgba($black, .05) !default;
```
#### [⬆ Back to top][0.0]


## hover table
* Firstly, use `.table`
* `table-hover` set the row's hover `background-color`
```SCSS
.table-hover {
  tbody tr {
    @include hover {
      // almost white
      background-color: $table-hover-bg;  // rgba($black, .075)
    }
  }
}

@mixin hover {
  &:hover { @content; }
}

--------------
// variables
$table-hover-bg:              rgba($black, .075) !default;
```
#### [⬆ Back to top][0.0]


## dark table
* Firstly use `.table`
* Use `.table-dark` set `color`, `background-color` and `<th>`, the `border` in `<td>`, `<thead> <th>` . If use the `.table-bordered` at the same time, set `border: 0`. If use the `.table-striped` at the same time, reset its `background-color` most like black. If use the `table-hover` at the same time, reset `background-color`.
```SCSS
.table-dark {
  color: $table-dark-color; // white
  background-color: $table-dark-bg; // $gray-900

  th, td, thead th {
    border-color: $table-dark-border-color; // lighten($gray-900, 7.5%)
  }
  
  // use `.table-dark` and `.table-bordered`,
  &.table-bordered {
    border: 0;
  }

  // use `table-dark` and `.table-striped` set `background-color` almost like black.  
  &.table-striped {
    tbody tr:nth-of-type(odd) {
      background-color: $table-dark-accent-bg; // rgba($white, .05)
    }
  }

  &.table-hover {
    tbody tr {
      @include hover {
        background-color: $table-dark-hover-bg; // rgba($white, .075)
      }
    }
  }
}

-----------------------
// variables
$table-dark-bg:               $gray-900 !default;
$table-dark-accent-bg:        rgba($white, .05) !default;
$table-dark-hover-bg:         rgba($white, .075) !default;
$table-dark-border-color:     lighten($gray-900, 7.5%) !default;
$table-dark-color:            $body-bg !default;
```
#### [⬆ Back to top][0.0]


## table row background
* Firstly, use `.table`
* Through `@each var... in $theme-colors` set `table-*` to set table row background and set when using `.table-hover`, set its hoverable background to override the hoverable background of `.table-hover`.
* Regular table background variants are not available with the dark table. However, we can use text utilities and background utilities to achieve the same goal.
    
    See [text color][1]
    
    See [background color][2]

```SCSS
@each $color, $value in $theme-colors {
  /* e.g "primary" $primary
   *
   */
  @include table-row-variant($color, theme-color-level($color, -9));
  /* theme-color-level get a mix color.
   * e.g pass "primary" and -9 to theme-color-level
   * table-row-variant set background color
   */
}

@include table-row-variant(active, $table-active-bg);


------------------------------
// mixin
@mixin table-row-variant($state, $background) {
  /* Exact selectors below required to override `.table-striped` 
   * and prevent inheritance to nested tables.
   */
  .table-#{$state} {
    &, > th, > td {
      background-color: $background;
    }
  }

  // Hover states for `.table-hover`
  // Note: this is not available for cells or rows within `thead` or `tfoot`.
  .table-hover {
    // reset the backgoround when using `.table-#{state}`
    $hover-background: darken($background, 5%);

    .table-#{$state} {
      @include hover {
        background-color: $hover-background;

        > td, > th {
          background-color: $hover-background;
        }
      }
    }
  }
}
-------------------------------------------
// function
@function theme-color-level($color-name: "primary", $level: 0) {
  // use `theme-color()` to get the `key` 's `value`
  $color: theme-color($color-name);
  $color-base: if($level > 0, $black, $white);
  $level: abs($level);
  
  /* mix($color1, $color2, $color1-weight)
   * ($black|$white, color, $level*8%)
   */
  @return mix($color-base, $color, $level * $theme-color-interval);
}

// according `key`, get the `value`
@function theme-color($key: "primary") {
  @return map-get($theme-colors, $key);
}


--------------
// variables
$theme-color-interval:      8% !default;
```
#### [⬆ Back to top][0.0]


## responsive table
* Always `<table>` within the parent container that use `table-responsive-*`
* `table-responsive-*` use `@each ... in ...`, `breakpoint-next` to get the next breakpoint name, and then use `breakpoint-infix` get `-sm, -md, -lg, -xl, "" `, so that create the classes. In these class, use `breakpoint-max` to get the next breakpoint 's next breakpoint 's minumum width(minumum width get by `breakpoint-min`), and then `-0.02`, this as the media query 's `max-width`.
```SCSS
.table-responsive {
  // $breakpoint: xl|sm|md|...
  @each $breakpoint in map-keys($grid-breakpoints) {
    // return name of the next breakpoint, or null for the last breakpoint.
    $next: breakpoint-next($breakpoint, $grid-breakpoints);
    
    // because of $next, $infix return -sm, -md, -lg, -xl,""
    $infix: breakpoint-infix($next, $grid-breakpoints);

    &#{$infix} {
      /* media-brekapoint-down use breakdown-max
       * to get the maximum value that calculated as the minimum of the next one less 0.02px
       * and then use media query on the value.
       */
      @include media-breakpoint-down($breakpoint) {
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar; 

        // Prevent double border on horizontal scroll due to use of `display: block;`
        > .table-bordered {
          border: 0;
        }
      }
    }
  }
}

```

```SCSS
// _breakpoints.scss
/* Name of the next breakpoint, or null for the last breakpoint.
 *
 *   >> breakpoint-next(sm)
 *    md
 *    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    md
 *    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))
 *    md
 */
@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {
  // first index is 1
  $n: index($breakpoint-names, $name);
  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);
}


// Media of at most the maximum breakpoint width. No query for the largest breakpoint.
@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {
  $max: breakpoint-max($name, $breakpoints);
  @if $max {
    @media (max-width: $max) {
      @content;
    }
  } @else {
    @content;
  }
}


/* Maximum breakpoint width. Null for the largest (last) breakpoint.
 * The maximum value is calculated as the minimum of the next one less 0.02px
 * to work around the limitations of `min-` and `max-` prefixes and viewports with fractional * widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 *
 *    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
 *    767.98px
 */
@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {
  $next: breakpoint-next($name, $breakpoints);
  @return if($next, breakpoint-min($next, $breakpoints) - .02px, null);
}
```
#### [⬆ Back to top][0.0]