[0.0]: #visibility

# Visibility
Set element's visibility does not affect layout.

## SCSS
```SCSS
// \.(visible|invisible)
.visible {
  @include invisible(visible);
}

.invisible {
  @include invisible(hidden);
}

@mixin invisible($visibility) {
  visibility: $visibility !important;
}
```

#### [⬆ Back to top][0.0]