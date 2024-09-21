[0.0]: #Jumbotron
[1.0]: #basic-jumbotron
[2.0]: #fluid-jumbotron

[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-B-Jumbotron.html
[02]: ../Appendix/3Components-B-Jumbotron.html
# Jumbotron
A lightweight, flexible component that can optionally extend the entire viewport to showcase key messages on your site.(在整个视口展示关键信息)

* Use `.jumbotron` to `<div>`, if you want no rounder border and less padding to add `.jumbotron-fluid`

* In `.jumbotron`, heading usually use `.display-*`, leadding(突出的) paragraph can use `lead`

See rendering result [jumbotron.html][01]

See source code [jumbotron.html][02]


1. [basic-jumbotron][1.0]
2. [fluid jumbotron][2.0]
## basic jumbotron
```SCSS
.jumbotron {
  padding: $jumbotron-padding ($jumbotron-padding / 2);
  margin-bottom: $jumbotron-padding;
  background-color: $jumbotron-bg;
  @include border-radius($border-radius-lg);

  @include media-breakpoint-up(sm) {
    padding: ($jumbotron-padding * 2) $jumbotron-padding;
  }
}
```
#### [⬆ Back to top][0.0]


## fluid jumbotron
```SCSS
.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  @include border-radius(0);
}
```
#### [⬆ Back to top][0.0]