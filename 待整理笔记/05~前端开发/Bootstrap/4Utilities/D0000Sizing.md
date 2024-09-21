[0.0]: #Sizing
# Sizing
* `.w-25`, `.w-50`, `.w-75`, `w-100`, `w-auto`
* `.h-25`, `.h-50`, `.h-75`, `h-100`, `h-auto`
  
```SCSS
// utilitis/_sizing.scss
@each $prop, $abbrev in (width: w, height: h) {
  @each $size, $length in $sizes {
    .#{$abbrev}-#{$size} { #{$prop}: $length !important; }
  }
}

// _size.scss
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}

.mw-100 { max-width: 100% !important; }
.mh-100 { max-height: 100% !important; }

--------------------
// variables
//_variables.scss

// This variable affects the `.h-*` and `.w-*` classes.
$sizes: () !default;
$sizes: map-merge(
  (
    25: 25%,
    50: 50%,
    75: 75%,
    100: 100%,
    auto: auto
  ),
  $sizes
);
```

#### [⬆ Back to top][0.0]
