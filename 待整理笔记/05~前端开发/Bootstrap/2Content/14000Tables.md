## Tables

## SCSS
```SCSS
table {
  // prevent double borders
  border-collapse: collapse;
}

caption {
  // .75rem
  padding-top: $table-cell-padding;
  padding-bottom: $table-cell-padding;

  // #6c757d
  color: $table-caption-color;
  text-align: left;
  caption-side: bottom;
}

th {
  // Matches default `<td>` alignment by inheriting from the `<body>`, or the
  // closest parent with a set `text-align`.
  text-align: inherit;
}
```

```SCSS
// variables
$table-cell-padding:          .75rem !default;
$table-caption-color:         $text-muted !default;
$text-muted:                  $gray-600 !default;
$gray-600: #6c757d !default;
```