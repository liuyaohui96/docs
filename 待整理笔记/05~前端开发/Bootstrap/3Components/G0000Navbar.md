[0.0]: #Navbar
[1.0]: #basic-navbar
[2.0]: #navbar-light-backgruond
[3.0]: #navbar-dark-backgruond
[4.0]: #navbar-brand
[5.0]: #navbar-nav
[6.0]: #navbar-text
[7.0]: #responsive-navbar
[7.1]: #navbar-expand
[7.2]: #navbar-toggler-and-icon
[7.3]: #navbar-collapse


[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-F-Navbar.html
[02]: ../Appendix/3Components-F-Navbar.html

* In `<nav>`, use `.navbar`. The light background add `.navbar-light bg-*`, the dark backgrond add `.navbar-dark bg-*`. Responsive layout, add `.narbar-expand*`

* Logo, in `<a>`, use `.navbar-brand`

* For `<button>`, use `.navbar-toggler`, add attribute `data-toggle="collpase" data-target="#...`, for assist screen reader, add attribute `aria-happen="false", aria-conatrols="...` and so on. `<span>` in `<button>`, use `.navbar-toggler-icon`

* collpase nav, in `<div>`, use `.collapse .navbar-collapse`, set id attribute.

* in navbar-nav, use `.nav` in `<nav>`, for nav-item, use `.nav-link` in `<a>`


# Navbar
Navbar support for branding, navigation, and more, including support for our collapse plugin.

See rendering result [navbar.html][01]

See source code [navbar.html][02]

1. [basic navbar][1.0]
2. [navbar light backgruond][2.0]
3. [navbar dark backgruond][3.0]
4. [navbar brand][4.0]
5. [navbar nav][5.0]
6. [navbar text][6.0]
7. [responsive navbar][7.0]
    * [navbar expand][7.1]
    * [navbar toggler and icon][7.2]
    * [navbar-collapse][7.3]
## basic navbar
* `.navbar`

* `.navbar > .container`, `.navbar > .container-fluid`
```SCSS
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap; // allow us to do the line break for collapsing content
  align-items: center;
  justify-content: space-between; // space out brand from logo
  padding: $navbar-padding-y $navbar-padding-x;

  // Because flex properties aren't inherited, we need to redeclare these first
  // few properties so that content nested within behave properly.
  > .container,
  > .container-fluid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
}
```
#### [⬆ Back to top][0.0]


## navbar light backgruond
* `.navbar-light`

* `.navbar-light .navbar-brand`

    * `.navbar-light .navbar-brand:hover`, `.navbar-light .navbar-brand:focus`

* `.navbar-light .navbar-nav .nav-link`
    * `.navbar-light .nabar-nav .nav-link:hover`, `.navbar-light .nabar-nav .nav-link:focus`
* `.navbar-light .navbar-nav.disabled`

* `.navbar-light .show > .nav-link`, `.navbar-light .active > .nav-link`, `.navbar-light .nav-link.show`, `.navbar-light .nav-link.active`

* `.navbar-light .navbar-toggler`

* `.navbar-light .navbar-toggler-icon`

* `.navbar-light .navbar-text`
    * `.navbar-light .navbar-text a`
        * `navbar-light .nav-text a:hover`, `navbar-light .nav-text a:focus`

```SCSS
// Dark links against a light background
.navbar-light {
  .navbar-brand {
    color: $navbar-light-brand-color;

    @include hover-focus {
      color: $navbar-light-brand-hover-color;
    }
  }

  .navbar-nav {
    .nav-link {
      color: $navbar-light-color;

      @include hover-focus {
        color: $navbar-light-hover-color;
      }

      &.disabled {
        color: $navbar-light-disabled-color;
      }
    }

    .show > .nav-link,
    .active > .nav-link,
    .nav-link.show,
    .nav-link.active {
      color: $navbar-light-active-color;
    }
  }

  .navbar-toggler {
    color: $navbar-light-color;
    border-color: $navbar-light-toggler-border-color;
  }

  .navbar-toggler-icon {
    background-image: $navbar-light-toggler-icon-bg;
  }

  .navbar-text {
    color: $navbar-light-color;
    a {
      color: $navbar-light-active-color;

      @include hover-focus {
        color: $navbar-light-active-color;
      }
    }
  }
}
```
#### [⬆ Back to top][0.0]


## navbar dark backgruond
* `.navbar-dark`

* `.navbar-dark .navbar-brand`

    * `.navbar-dark .navbar-brand:hover`, `.navbar-dark .navbar-brand:focus`

* `.navbar-dark .navbar-nav .nav-link`
    * `.navbar-dark .nabar-nav .nav-link:hover`, `.navbar-dark .nabar-nav .nav-link:focus`
* `.navbar-dark .navbar-nav.disabled`

* `.navbar-dark .show > .nav-link`, `.navbar-dark .active > .nav-link`, `.navbar-dark .nav-link.show`, `.navbar-dark .nav-link.active`

* `.navbar-dark .navbar-toggler`

* `.navbar-dark .navbar-toggler-icon`

* `.navbar-dark .navbar-text`
    * `.navbar-dark .navbar-text a`
        * `navbar-dark .nav-text a:hover`, `navbar-dark .nav-text a:focus`
```SCSS
.navbar-dark {
  .navbar-brand {
    color: $navbar-dark-brand-color;

    @include hover-focus {
      color: $navbar-dark-brand-hover-color;
    }
  }

  .navbar-nav {
    .nav-link {
      color: $navbar-dark-color;

      @include hover-focus {
        color: $navbar-dark-hover-color;
      }

      &.disabled {
        color: $navbar-dark-disabled-color;
      }
    }

    .show > .nav-link,
    .active > .nav-link,
    .nav-link.show,
    .nav-link.active {
      color: $navbar-dark-active-color;
    }
  }

  .navbar-toggler {
    color: $navbar-dark-color;
    border-color: $navbar-dark-toggler-border-color;
  }

  .navbar-toggler-icon {
    background-image: $navbar-dark-toggler-icon-bg;
  }

  .navbar-text {
    color: $navbar-dark-color;
    a {
      color: $navbar-dark-active-color;

      @include hover-focus {
        color: $navbar-dark-active-color;
      }
    }
  }
}
```
#### [⬆ Back to top][0.0]


## navbar brand
`.navbar-brand`  for your company, product, or project name

* `.navbar-brand`

* `.navbar-brand:hover`, `.navbar-brand:focus`
```SCSS
// Navbar brand
// Used for brand, project, or site names.

.navbar-brand {
  display: inline-block;
  padding-top: $navbar-brand-padding-y;
  padding-bottom: $navbar-brand-padding-y;
  margin-right: $navbar-padding-x;
  font-size: $navbar-brand-font-size;
  line-height: inherit;
  white-space: nowrap;

  @include hover-focus {
    text-decoration: none;
  }
}

```
#### [⬆ Back to top][0.0]


## navbar nav
`.navbar-nav` support a full-height and lightweight navigation (including support for dropdowns)

* `.navbar-nav` 

* `.navbar-nav .nav-link`

* `.navbar-nav .dropdown-menu`
```SCSS
// Navbar nav
// Custom navbar navigation (doesn't require `.nav`, but does make use of `.nav-link`).
.navbar-nav {
  display: flex;
  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  .nav-link {
    padding-right: 0;
    padding-left: 0;
  }

  .dropdown-menu {
    position: static;
    float: none;
  }
}
```
#### [⬆ Back to top][0.0]


## navbar text
* `navbar-text`
```SCSS
.navbar-text {
  display: inline-block;
  padding-top: $nav-link-padding-y;
  padding-bottom: $nav-link-padding-y;
}
```
#### [⬆ Back to top][0.0]


## responsive navbar
Navbars can utilize `.navbar-toggler`, `.navbar-collapse`, and `.navbar-expand{-sm|-md|-lg|-xl}` classes to change when their content collapses behind a button

For navbars that never collapse, add the `.navbar-expand` class on the navbar.
### navbar expand
* `$next: xs->sm, sm->md, xl->""`
  
   ` $infix: "", -sm, ...`

* `@media(max-width: $max)`
    * `.nav-expand* > .container`, `.nav-expand*> .container-fluid` 

* `@media(min-width: $min[$next]){...}`
    * `.nav-expand*`
    * `.nav-expand* .navbar-nav`
        * `.nav-expand .navbar-nav .navbar-nav`
            * `.nav-expand .navbar-nav .navbar-nav .dropdown-menu`
            * `.nav-expand .navbar-nav .navbar-nav .nav-link`
    
    * `.nav-expand* .navbar-collapse`
    * `.nav-expand* .navbar-toggler`

```SCSS
// Generate series of `.navbar-expand-*` responsive classes for configuring
// where your navbar collapses.
.navbar-expand {
  @each $breakpoint in map-keys($grid-breakpoints) {
    $next: breakpoint-next($breakpoint, $grid-breakpoints);
    $infix: breakpoint-infix($next, $grid-breakpoints);

    &#{$infix} {
      @include media-breakpoint-down($breakpoint) {
        > .container,
        > .container-fluid {
          padding-right: 0;
          padding-left: 0;
        }
      }

      @include media-breakpoint-up($next) {
        flex-flow: row nowrap;
        justify-content: flex-start;

        .navbar-nav {
          flex-direction: row;

          .dropdown-menu {
            position: absolute;
          }

          .nav-link {
            padding-right: $navbar-nav-link-padding-x;
            padding-left: $navbar-nav-link-padding-x;
          }
        }

        // For nesting containers, have to redeclare for alignment purposes
        > .container,
        > .container-fluid {
          flex-wrap: nowrap;
        }

        .navbar-collapse {
          display: flex !important;  // stylelint-disable-line declaration-no-important

          // Changes flex-bases to auto because of an IE10 bug
          flex-basis: auto;
        }

        .navbar-toggler {
          display: none;
        }
      }
    }
  }
}

```
#### [⬆ Back to top][0.0]


### navbar toggler and icon
1. navbar toggler
   * `.navbar-togger`
   * `.navbar-togger:hover`, `.navbar-togger:focus`
   * `.navbar-togger:not(:disabled):not(.disabled)`

2. navbar toggler icon
    * `.navbar-toggler-icon`
```SCSS
// Button for toggling the navbar when in its collapsed state
.navbar-toggler {
  padding: $navbar-toggler-padding-y $navbar-toggler-padding-x;
  font-size: $navbar-toggler-font-size;
  line-height: 1;
  background-color: transparent; // remove default button style
  border: $border-width solid transparent; // remove default button style
  @include border-radius($navbar-toggler-border-radius);

  @include hover-focus {
    text-decoration: none;
  }

  // Opinionated: add "hand" cursor to non-disabled .navbar-toggler elements
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
}

// Keep as a separate element so folks can easily override it with another icon
// or image file as needed.
.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
}
```
#### [⬆ Back to top][0.0]


### navbar-collapse
* `navbar-collapse`
```SCSS
.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  // For always expanded or extra full navbars, ensure content aligns itself
  // properly vertically. Can be easily overridden with flex utilities.
  align-items: center;
}
```
#### [⬆ Back to top][0.0]




