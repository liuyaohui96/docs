[0.0]: #Breakcrumb
[1.0]: #breakcrumb-container
[2.0]: #breadcrumb-item
[3.0]: #accessibility

[1]: https://823406519.github.io/Bootstrap/Appendix/3Components-2-Breakcrumb.html
[2]: ../Appendix/3Components-2-Breakcrumb.html
# Breakcrumb
See rendering result [breakcrumb.html][1]

See source code [breakcrumb.html][2]

Indicate the current page’s location within a navigational hierarchy that automatically adds separators.
1. [breakcrumb container][1.0]
2. [breadcrumb item][2.0]
3. [accessibility][3.0]
   
## breakcrumb container
* Use `.breadcrumb` in `<ol>`, setting `display: flex`, `flex-wrap: wrap`, `padding`, `margin-bottom`, `list-style:none`, `background-color`, `border-radius`
```SCSS
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: $breadcrumb-padding-y $breadcrumb-padding-x; // .75rem 1rem
  margin-bottom: $breadcrumb-margin-bottom; // 1rem
  list-style: none;
  background-color: $breadcrumb-bg; // $gray-200
  @include border-radius($breadcrumb-border-radius); // .25rem
}

------------------
// variables
$breadcrumb-padding-y:              .75rem !default;
$breadcrumb-padding-x:              1rem !default;

$breadcrumb-margin-bottom:          1rem !default;

$breadcrumb-bg:                     $gray-200 !default;

$breadcrumb-border-radius:          $border-radius !default;
```
#### [⬆ Back to top][0.0]


## breadcrumb item
* Firstly, use `.breakcrummb` in `<ol>`
* `.breadcrumb-item` use in `<li>`, becease of `.breakcrumb-item+.breakcrumb-item` set `padding-left`, `.breakmb+.breakcrumb-item::before` set the breadcrumb separator by setting `display: inline-block`, `padding-right`, `color`, `content`.
* To solve the IE `::before` pseudo-element  inherits the the `text-decoration`, set  `.breakcrumb-item+.breakcrumb-item:hover::before` style to solve this problem.
* Use `active` in `<li>`, the `.beakcrumb-item.active` style that set 'color` will automatically apply.
```SCSS
.breadcrumb-item {
  // The separator between breadcrumbs (by default, a forward-slash: "/")
  + .breadcrumb-item {
    padding-left: $breadcrumb-item-padding; //.5rem

    &::before {
      display: inline-block; // Suppress underlining of the separator in modern browsers
      padding-right: $breadcrumb-item-padding; //.5rem
      color: $breadcrumb-divider-color; // $gray-600
      content: $breadcrumb-divider;  // quote("/")
    }
  }

  /* IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built
   * without `<ul>`s. The `::before` pseudo-element generates an element within
   * the .breadcrumb-item and thereby inherits the `text-decoration`.
   * To trick IE into suppressing the underline, we give the pseudo-element an
   * underline and then immediately remove it.
   */
  + .breadcrumb-item:hover::before {
    text-decoration: underline;
  }
  + .breadcrumb-item:hover::before {
    text-decoration: none;
  }

  &.active {
    color: $breadcrumb-active-color; //$gray-600
  }
}

------------
// variables
$breadcrumb-item-padding:           .5rem !default;

$breadcrumb-divider-color:          $gray-600 !default;
$breadcrumb-divider:                quote("/") !default;

$breadcrumb-active-color:           $gray-600 !default;
```
#### [⬆ Back to top][0.0]


## accessibility
Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

#### [⬆ Back to top][0.0]