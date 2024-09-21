[0.0]: #page-default

# Page-default
## SCSS
```SCSS
// width doesn't affected by padding & margin
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* change the default font-family in all browser
 * set the line-height in all broser
 */
html {
  font-family: sans-serif; 
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%; 
  -ms-overflow-style: scrollbar; 
  -webkit-tap-highlight-color: rgba($black, 0);
}

/* remove broser's defualt margin
 * set default font-famliy, font-weight, line-height, color, background-color
 * set default text-align to left so that we can inherit it later
 */
body {
  margin: 0; 
  
  /* use "native font stack" for optimum text rendering on
   * every device and OS
   */
  font-family: $font-family-base;
  font-size: $font-size-base;
  font-weight: $font-weight-base;
  line-height: $line-height-base;
  color: $body-color;
  text-align: left; 
  background-color: $body-bg; 
}

// use HTML5's new structural element in older browser
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}
```

```SCSS
// variables
$font-family-base:            $font-family-sans-serif !default;

/* -apple-system: safari(San Francisco)
 * BlinkMacSystemFont: Chrome(San francisco)
 * "Segoe UI": window
 * Roboto: Android
 * "Helvetica Neue", Arial, sans-serif: fallback
 * "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" : emoji fonts
 */ 
$font-family-sans-serif:      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
                         "Helvetica Neue", Arial, sans-serif, 
                         "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" 
                         !default;


$font-size-base:              1rem !default;

$font-weight-base:            $font-weight-normal !default;
$font-weight-normal:          400 !default;

$body-color:                $gray-900 !default;
$gray-900: #212529 !default;

$body-bg:                   $white !default;
```

#### [⬆ Back to top][0.0]