# Headings
* Set `<h1>` through `<h6>`, use `h[1-6]` and `.h[1-6]`
* `.lead` can use to make the paragraph stand out
* Use `small` and `.text-muted` can make the secondary heading.


## SCSS
```SCSS
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  // set again, 0.5*$spacer
  margin-bottom: $headings-margin-bottom;

  font-family: $headings-font-family; // inherit
  font-weight: $headings-font-weight; // 500
  line-height: $headings-line-height; // 1.2
  color: $headings-color; // inherit
}

h1, .h1 { font-size: $h1-font-size; } // 2.5*$font-size-base
h2, .h2 { font-size: $h2-font-size; } // 2*$font-size-base
h3, .h3 { font-size: $h3-font-size; } // 1.75*$font-size-base
h4, .h4 { font-size: $h4-font-size; } // 1.5*$font-size-base
h5, .h5 { font-size: $h5-font-size; } // 1.25*$font-size-base
h6, .h6 { font-size: $h6-font-size; } // $font-size-base

small, .small {
  // same as reboot.scss
  font-size: $small-font-size; // 80%
  
  font-weight: $font-weight-normal; // 400
}

.lead {
  font-size: $lead-font-size; // 1.25*$font-size-base
  font-weight: $lead-font-weight; //500
}



// display-[1-4]
// `font-size` bigger than h[1-6], `font-weight` lighter than h[1-6]
.display-1 {
  font-size: $display1-size; // 6rem
  font-weight: $display1-weight; // 300
  line-height: $display-line-height; // 0.5*$spacer
}
.display-2 {
  font-size: $display2-size; // 5.5rem
  font-weight: $display2-weight; // 300
  line-height: $display-line-height; // 0.5*$spacer
}
.display-3 {
  font-size: $display3-size; //4.5rem
  font-weight: $display3-weight; // 300
  line-height: $display-line-height; // 0.5*$spacer
}
.display-4 {
  font-size: $display4-size; //3.5rem
  font-weight: $display4-weight; // 300
  line-height: $display-line-height; // 0.5*$spacer
}
```

```SCSS
// variables
$headings-margin-bottom:      ($spacer / 2) !default;
$spacer: 1rem !default;
```
#### [⬆ Back to top][0.0]