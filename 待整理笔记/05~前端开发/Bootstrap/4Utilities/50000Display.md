[0.0]: #Display

# Display
Set the elements or components 's `display` property. To hide an element use
`.d-none` or `.d-(sm|md|lg|xl)-none`
## SCSS
```SCSS
// Utilities for common `display` values
/* media-breakpoint-up
 * 1. @media(min-width: $min){ @content};
 * 2. @content
 */
@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    // 1. reutrn '-sm', ..., '-xl', in @media body
    // 2. return ""
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    // \.d(-sm|-md|-lg|-xl)?-(none|inline|inline-block|table|table-row|table-cell|flex|inline-flex)
    .d#{$infix}-none         { display: none !important; }
    .d#{$infix}-inline       { display: inline !important; }
    .d#{$infix}-inline-block { display: inline-block !important; }
    .d#{$infix}-block        { display: block !important; }
    .d#{$infix}-table        { display: table !important; }
    .d#{$infix}-table-row    { display: table-row !important; }
    .d#{$infix}-table-cell   { display: table-cell !important; }
    .d#{$infix}-flex         { display: flex !important; }
    .d#{$infix}-inline-flex  { display: inline-flex !important; }
  }
}


@media print {
  // .d-print-(none|inline|inline-block|table|table-row|table-cell|flex|inline-flex)
  .d-print-none         { display: none !important; }
  .d-print-inline       { display: inline !important; }
  .d-print-inline-block { display: inline-block !important; }
  .d-print-block        { display: block !important; }
  .d-print-table        { display: table !important; }
  .d-print-table-row    { display: table-row !important; }
  .d-print-table-cell   { display: table-cell !important; }
  .d-print-flex         { display: flex !important; }
  .d-print-inline-flex  { display: inline-flex !important; }
}
```

#### [⬆ Back to top][0.0]