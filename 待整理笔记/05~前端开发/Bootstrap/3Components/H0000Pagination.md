[0.0]: #Pagination
[1.0]: #basic-pagination
[2.0]: #page-size
[3.0]: #page-item
[4.0]: #page-link
[5.0]: #utilities

[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-G-Pagination.html
[02]: ../Appendix/3Components-G-Pagination.html

[1]: ../4Utilities/70000Flex.md

# Pagination

See rendering result [pagination.html][01]

See source code [pagination.html][02]

1. [basic pagination][1.0]
2. [page size][2.0]
3. [page-item][3.0]
4. [page link][4.0]
5. [utilities][5.0]

## basic pagination
* `.pagnation`
```SCSS
.pagination {
  display: flex;
  @include list-unstyled();
  @include border-radius();
}
```
#### [⬆ Back to top][0.0]

## page size
* `pagination-lg`, `pagination-sm` use `pagination-size()`
    * `pagination-* .page-link`
    * `pagination-* .page-item:first-child .page-link`
    * `pagination-* .page-item:last-child .page-link`
```SCSS
.pagination-lg {
  @include pagination-size($pagination-padding-y-lg, $pagination-padding-x-lg, 
                        $font-size-lg, $line-height-lg, $border-radius-lg);
}

.pagination-sm {
  @include pagination-size($pagination-padding-y-sm, $pagination-padding-x-sm, 
                            $font-size-sm, $line-height-sm, $border-radius-sm);
}

@mixin pagination-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {
  .page-link {
    padding: $padding-y $padding-x;
    font-size: $font-size;
    line-height: $line-height;
  }

  .page-item {
    &:first-child {
      .page-link {
        @include border-left-radius($border-radius);
      }
    }
    &:last-child {
      .page-link {
        @include border-right-radius($border-radius);
      }
    }
  }
}
```
#### [⬆ Back to top][0.0]


## page item
* `.page-item:first-child .page-link`
* `.page-item:last-child .page-link`
* `.page-item .active .page-link`
* `.page-item .disabled .page-link`
```SCSS
.page-item {
  &:first-child {
    .page-link {
      margin-left: 0;
      @include border-left-radius($border-radius);
    }
  }
  &:last-child {
    .page-link {
      @include border-right-radius($border-radius);
    }
  }

  &.active .page-link {
    z-index: 1;
    color: $pagination-active-color;
    background-color: $pagination-active-bg;
    border-color: $pagination-active-border-color;
  }

  &.disabled .page-link {
    color: $pagination-disabled-color;
    pointer-events: none;
    // Opinionated: remove the "hand" cursor set previously for .page-link
    cursor: auto;
    background-color: $pagination-disabled-bg;
    border-color: $pagination-disabled-border-color;
  }
}
```
#### [⬆ Back to top][0.0]


## page link
* `page-link`
* `page-link:hover`
* `page-link:focus`
* `page-link:not(:disabled):not(.disabled)`
```SCSS
.page-link {
  position: relative;
  display: block;
  padding: $pagination-padding-y $pagination-padding-x;
  margin-left: -$pagination-border-width;
  line-height: $pagination-line-height;
  color: $pagination-color;
  background-color: $pagination-bg;
  border: $pagination-border-width solid $pagination-border-color;

  &:hover {
    z-index: 2;
    color: $pagination-hover-color;
    text-decoration: none;
    background-color: $pagination-hover-bg;
    border-color: $pagination-hover-border-color;
  }

  &:focus {
    z-index: 2;
    outline: $pagination-focus-outline;
    box-shadow: $pagination-focus-box-shadow;
  }

  // Opinionated: add "hand" cursor to non-disabled .page-link elements
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
}
```
#### [⬆ Back to top][0.0]

## utilities
Use [flex utilities][1] to change alignment, e.g `justify-content-center`

#### [⬆ Back to top][0.0]