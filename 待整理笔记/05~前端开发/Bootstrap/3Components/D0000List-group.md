[0.0]: #List-group
[1.0]: #base-list-group
[2.0]: #list-group-flush
[3.0]: #list-group-item
[4.0]: #list-group-item-action
[5.0]: #color-of-list-group-litem

[01]: https://823406519.github.io/Bootstrap/Appendix/3Components-C-List-group.html
[02]: ../Appendix/3Components-C-List-group.html

[1]: 20000Badges.md
[2]: ../4Utilities/70000Flex.md

# List group
List groups are a component for displaying a series of content.

* Use `.list-group` to `<div>` or `ul`, if you want to remove borders and border-radius to keep list group items edge-to-edge, add `.list-group-flush`

* Use `.list-group-item` to `<li>`, for `<a>` or `<button>` using `.list-group-item` and `.list-group-action`. If you want to color the list group item, use `list-group-item-*`.

See rendering result [list-group.html][01]

See source code [list-group.html][02]

1. [base list group][1.0]
2. [list group flush][2.0]
3. [list group item][3.0]
4. [list group item action][4.0]
5. [color of list group litem][5.0]

## base list group
* `.list-group`
```SCSS
.list-group {
  display: flex;
  flex-direction: column;

  // No need to set list-style: none; since .list-group-item is block level
  padding-left: 0; // reset padding because ul and ol
  margin-bottom: 0;
}

```
#### [⬆ Back to top][0.0]


## list group flush
Remove borders and border-radius to keep list group items edge-to-edge.

* `.list-group-flush .list-group-item`
* `.list-group-flush .list-group-item:last-child`
* `.list-group-flush:first-child`
* `.list-group-flush:last-child list-group-item:last-child`
```SCSS
// Flush list items
//
// Remove borders and border-radius to keep list group items edge-to-edge. Most
// useful within other components (e.g., cards).

.list-group-flush {
  .list-group-item {
    border-right: 0;
    border-left: 0;
    @include border-radius(0);

    &:last-child {
      margin-bottom: -$list-group-border-width;
    }
  }

  &:first-child {
    .list-group-item:first-child {
      border-top: 0;
    }
  }

  &:last-child {
    .list-group-item:last-child {
      margin-bottom: 0;
      border-bottom: 0;
    }
  }
}
```
#### [⬆ Back to top][0.0]


## list group item
* `.list-group-item`
* `.list-group-item:first-child`
* `.list-group-item:last-child`
* `.list-group-item:hover`, `.list-group-item:focus`
* `.list-group-item.disabled`, `.list-group-item:disabled`, `.list-group-item.active`
```SCSS
// Individual list items
//
// Use on `li`s or `div`s within the `.list-group` parent.

.list-group-item {
  position: relative;
  display: block;
  padding: $list-group-item-padding-y $list-group-item-padding-x;
  // Place the border on the list items and negative margin up for better styling
  margin-bottom: -$list-group-border-width;
  background-color: $list-group-bg;
  border: $list-group-border-width solid $list-group-border-color;

  &:first-child {
    @include border-top-radius($list-group-border-radius);
  }

  &:last-child {
    margin-bottom: 0;
    @include border-bottom-radius($list-group-border-radius);
  }

  @include hover-focus {
    z-index: 1; // Place hover/active items above their siblings for proper border styling
    text-decoration: none;
  }

  &.disabled,
  &:disabled {
    color: $list-group-disabled-color;
    pointer-events: none;
    background-color: $list-group-disabled-bg;
  }

  // Include both here for `<a>`s and `<button>`s
  &.active {
    z-index: 2; // Place active items above their siblings for proper border styling
    color: $list-group-active-color;
    background-color: $list-group-active-bg;
    border-color: $list-group-active-border-color;
  }
}
```

#### [⬆ Back to top][0.0]


## list group item action
Use **anchor or button** elements instead of `li`s or `div`s to create interactive list items. 

* `.list-group-item-action`
* `.list-group-item-action:hover`, `.list-group-item-action:focus`
* `.list-group-item-action:active`
```SCSS
// Interactive list items
//
// Use anchor or button elements instead of `li`s or `div`s to create interactive
// list items. Includes an extra `.active` modifier class for selected items.

.list-group-item-action {
  width: 100%; // For `<button>`s (anchors become 100% by default though)
  color: $list-group-action-color;
  text-align: inherit; // For `<button>`s (anchors inherit)

  // Hover state
  @include hover-focus {
    color: $list-group-action-hover-color;
    text-decoration: none;
    background-color: $list-group-hover-bg;
  }

  &:active {
    color: $list-group-action-active-color;
    background-color: $list-group-action-active-bg;
  }
}
```
#### [⬆ Back to top][0.0]


## color of list group litem
* `.list-group-item-*`
* `.list-gorup-item-*.list-group-item-action:hover`, `.list-gorup-item-*.list-group-item-action:focus`;`.list-gorup-item-*.list-group-item-action.active`
```SCSS
@each $color, $value in $theme-colors {
  @include list-group-item-variant($color, theme-color-level($color, -9), theme-color-level($color, 6));
}

@mixin list-group-item-variant($state, $background, $color) {
  .list-group-item-#{$state} {
    color: $color;
    background-color: $background;

    &.list-group-item-action {
      @include hover-focus {
        color: $color;
        background-color: darken($background, 5%);
      }

      &.active {
        color: $white;
        background-color: $color;
        border-color: $color;
      }
    }
  }
}
```
#### [⬆ Back to top][0.0]

## example of application
1. badge in list group item

    Use `.badge`, `.badge-*`(e.g `.badge-priamry`), `.badge-pill` to `<span>` in `.list-group-item` element.

    More about badge, see [badge][1]

2. custom content in list group item

    For create layout , you can use [flex utilities][2], also you can use many other elements and style them.

