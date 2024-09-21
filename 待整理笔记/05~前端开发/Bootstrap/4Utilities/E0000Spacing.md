[0.0]: #Spacing

# Spacing
Control the margin and padding of the element.
## SCSS
```SCSS
/*media-breakpoint-up
 *1. @meadia(min-width: media-breakpoint-min){ @content}
 *2. @content
 */
@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    // 1. return -sm, ..., -xl, within @media
    // 2. return ""
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    @each $prop, $abbrev in (margin: m, padding: p) {
      /* $size: [0-5]
       * $length: 0....1rem...3rem
       */
      @each $size, $length in $spacers {
        // \.[mp](-sm|-md|-lg|-xl)??-[0-5]
        .#{$abbrev}#{$infix}-#{$size} { #{$prop}: $length !important; }
        
        // \.[mp][ty](-sm|-md|-lg|-xl)?-[0-5]
        .#{$abbrev}t#{$infix}-#{$size},
        .#{$abbrev}y#{$infix}-#{$size} {
          #{$prop}-top: $length !important;
        }

        // \.[mp][rx](-sm|-md|-lg|-xl)?-[0-5]
        .#{$abbrev}r#{$infix}-#{$size},
        .#{$abbrev}x#{$infix}-#{$size} {
          #{$prop}-right: $length !important;
        }

        // \.[mp][by](-sm|-md|-lg|-xl)?-[0-5]
        .#{$abbrev}b#{$infix}-#{$size},
        .#{$abbrev}y#{$infix}-#{$size} {
          #{$prop}-bottom: $length !important;
        }

        // \.[mp][lx](-sm|-md|-lg|-xl)?-[0-5]
        .#{$abbrev}l#{$infix}-#{$size},
        .#{$abbrev}x#{$infix}-#{$size} {
          #{$prop}-left: $length !important;
        }
      }
    }

    // Some special margin utils
    // \.m[xytrbl]?(-sm|-md|-lg|-xl)-auto
    .m#{$infix}-auto { margin: auto !important; }
    .mt#{$infix}-auto,
    .my#{$infix}-auto {
      margin-top: auto !important;
    }
    .mr#{$infix}-auto,
    .mx#{$infix}-auto {
      margin-right: auto !important;
    }
    .mb#{$infix}-auto,
    .my#{$infix}-auto {
      margin-bottom: auto !important;
    }
    .ml#{$infix}-auto,
    .mx#{$infix}-auto {
      margin-left: auto !important;
    }
  }
}
```

```SCSS
// _variables.scss

$spacer: 1rem !default;
$spacers: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$spacers: map-merge(
  (
    0: 0,
    1: ($spacer * .25),
    2: ($spacer * .5),
    3: $spacer,
    4: ($spacer * 1.5),
    5: ($spacer * 3)
  ),
  $spacers
);
```

#### [⬆ Back to top][0.0]