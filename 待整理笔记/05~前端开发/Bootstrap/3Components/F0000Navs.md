[0.0]: #Navs
[1.0]: #base-nav
[2.0]: #nav-tab
[3.0]: #nav-pill
[4.0]: #nav-fill-and-justify
[5.0]: #nav-link
[6.0]: #tab-content
[7.0]: #utilities
[8.0]: #accessibility

[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-E-Navs.html
[02]: ../Appendix/3Components-E-Navs.html

[1]: ../4Utilities/70000Flex.md


# Navs
* `nav` set `.nav`. If you want nav taba, add `.nav-tabs`. If you want nav pills, add `.nav-tabs`. Change the nav layout, set `.nav-fill` or `.nav-justified`(note the the `<a>` element should have `.nav-item`)

* `<a>` set `nav-link`

* Dynamically tablist
    * `<nav>` add `role="tablist"`
    * `<a>` add `data-toggle="tab"`, `role="tab"`, `aria-controls=...`, `aria-selected:true|false`
    * `<div>` that has `.tab-pane`, add `role=tabpanel`


See rendering result [nav.html][01]

See source code [nav.html][02]

1. [base nav][1.0]
2. [nav tab][2.0]
3. [nav pill][3.0]
4. [nav fill and justify][4.0]
5. [nav link][5.0]
6. [tab content][6.0]
7. [utilities][7.0]
8. [accessibility][8.0]

## base nav
* `.nav`
```SCSS
.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
```
#### [⬆ Back to top][0.0]


## nav tab
* `.nav-tabs`

* `.nav-tabs .nav-item`

* `.nav-tabs .nav-link`

* `.nav-tabs .nav-link.disabled`

* `.nav-tabs .nav-link.active`, `.nav-tabs .nav-item.show .nav-link`

* `.nav-tabs .dropdown-menu`
```SCSS
nav-tabs {
  border-bottom: $nav-tabs-border-width solid $nav-tabs-border-color;

  .nav-item {
    margin-bottom: -$nav-tabs-border-width;
  }

  .nav-link {
    border: $nav-tabs-border-width solid transparent;
    @include border-top-radius($nav-tabs-border-radius);

    @include hover-focus {
      border-color: $nav-tabs-link-hover-border-color;
    }

    &.disabled {
      color: $nav-link-disabled-color;
      background-color: transparent;
      border-color: transparent;
    }
  }

  .nav-link.active,
  .nav-item.show .nav-link {
    color: $nav-tabs-link-active-color;
    background-color: $nav-tabs-link-active-bg;
    border-color: $nav-tabs-link-active-border-color;
  }

  .dropdown-menu {
    // Make dropdown border overlap tab border
    margin-top: -$nav-tabs-border-width;
    // Remove the top rounded corners here since there is a hard edge above the menu
    @include border-top-radius(0);
  }
}
```
#### [⬆ Back to top][0.0]


## nav pill
* `.nav-pills .nav-link`

* `.nav-pills .nav-link.active`, `.nav-pills .show > .nav-link`
```SCSS
.nav-pills {
  .nav-link {
    @include border-radius($nav-pills-border-radius);
  }

  .nav-link.active,
  .show > .nav-link {
    color: $nav-pills-link-active-color;
    background-color: $nav-pills-link-active-bg;
  }
}
```
#### [⬆ Back to top][0.0]


## nav fill and justify
* `.nav-fill .nav-item` (extend the full available width, all horizontal space is occupied, but not every nav item has the same width)

* `.nav-justified .nav-item` (All horizontal space will be occupied, every nav item will be the same width)
```SCSS
.nav-fill {
  .nav-item {
    flex: 1 1 auto;
    text-align: center;
  }
}

.nav-justified {
  .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }
}
```
#### [⬆ Back to top][0.0]


## nav link
* `.nav-link`

* `.nav-disabled`
```SCSS
.nav-link {
  display: block;
  padding: $nav-link-padding-y $nav-link-padding-x;

  @include hover-focus {
    text-decoration: none;
  }

  // Disabled state lightens text
  &.disabled {
    color: $nav-link-disabled-color;
    pointer-events: none;
    cursor: default;
  }
}
```
#### [⬆ Back to top][0.0]


## tab content
* `.tab-content > .tab-pane`

* `.tab-content > .active`
```SCSS
// Tabbable tabs
// Hide tabbable panes to start, show them when `.active`
.tab-content {
  > .tab-pane {
    display: none;
  }
  > .active {
    display: block;
  }
}
```
#### [⬆ Back to top][0.0]


## utilities
1. use [flex utilities][1]
    
    like `.justify-content-center`, `.flex-column`
#### [⬆ Back to top][0.0]

## accessibility
* `role="navigation"` to `<ul>` 's parent container,  or `<nav>`, do not add the role to the `<ul>` itself
* navigation bars **should not** be given `role="tablist"`, `role="tab"` or `role="tabpanel"` attributes. Dynamic tabbed interfaces require role="tablist", role="tab", role="tabpanel", and additional aria- attributes in order to convey their structure.

* Note that dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues.

#### [⬆ Back to top][0.0]