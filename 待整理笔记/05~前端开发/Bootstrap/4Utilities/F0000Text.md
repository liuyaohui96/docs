[0.0]: #Text
[1.0]: #text-monospace
[2.0]: #text-weight-and-italic
[3.0]: #text-alignment
[4.0]: #text-wrap
[5.0]: #text-truncate
[6.0]: #text-transform

# Text
1. [text monospace][1.0]
2. [text weight and italic][2.0]
3. [text alignment][3.0]
4. [text wrap][4.0]
5. [text truncate][5.0]
6. [text transform][6.0]
## text monospace
```SCSS
.text-monospace { font-family: $font-family-monospace; }

// variables
$font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 
                        "Liberation Mono", "Courier New", monospace !default;
```
#### [⬆ Back to top][0.0]


## text weight and italic
```SCSS
.font-weight-light  { font-weight: $font-weight-light !important; } // 300
.font-weight-normal { font-weight: $font-weight-normal !important; } // 400
.font-weight-bold   { font-weight: $font-weight-bold !important; } // 700
.font-italic        { font-style: italic !important; }
```
#### [⬆ Back to top][0.0]


## text alignment
```SCSS
.text-justify  { text-align: justify !important; }

@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);
    // $infix: ""|sm|md|lg|xl
    .text#{$infix}-left   { text-align: left !important; }
    .text#{$infix}-right  { text-align: right !important; }
    .text#{$infix}-center { text-align: center !important; }
  }
}
```
#### [⬆ Back to top][0.0]


## text wrap
```SCSS
.text-nowrap{ 
    white-space: nowrap !important; 
}
```
#### [⬆ Back to top][0.0]


## text truncate
```SCSS
// require `display: block` or `dispaly: inline-block`
.text-truncate { @include text-truncate; }
@mixin text-truncate() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
#### [⬆ Back to top][0.0]


## text transform
```SCSS
.text-lowercase  { text-transform: lowercase !important; }
.text-uppercase  { text-transform: uppercase !important; }
.text-capitalize { text-transform: capitalize !important; }
```
#### [⬆ Back to top][0.0]