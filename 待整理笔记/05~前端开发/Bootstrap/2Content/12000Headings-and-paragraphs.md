# Headings and paragraphs

## SCSS
```SCSS
// avoids margin collapsing, set `margin-top: 0`;
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: $headings-margin-bottom;
}
p {
  margin-top: 0;
  margin-bottom: $paragraph-margin-bottom;
}
```

```SCSS
// variables
$headings-margin-bottom:      ($spacer / 2) !default;
$spacer: 1rem !default;

$paragraph-margin-bottom:   1rem !default;
```