[0.0]: #Introduction
[1.0]: #How-to-reference-Bootstrap
[2.0]: #HTML5-doctype
[3.0]: #Responsive-meta-tag
[4.0]: #Bootstrap-content

[1]: 110000How-to-reference-Bootstrap.md



# Introduction
Bootstap is a HTML & CSS &　JS framework to quick build a responsive,
mobile-first website.Bootstap use SCSS to write CSS, and more componets and plugins built on jQuery.

We can get all Bootstarp file in https://getbootstrap.com
1. [How to reference Bootstrap][1.0]
2. [HTML5 doctype][2.0]
3. [Responsive meta tag][3.0]
4. [Bootstrap content][4.0]

## How to reference Bootstrap
See [How to reference Booststrap][1]

#### [⬆ Back to top][0.0]

## HTML5 doctype
Bootstrap need to use HTML5 doctype
```HTML
<!doctype>
<html>
    ...
</html>
```

#### [⬆ Back to top][0.0]

## Responsive meta tag
To ensure proper rendering and zooming(渲染和缩放) for devices, we should
add **reponsive meta tag** in head tag.

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

#### [⬆ Back to top][0.0]

## Bootstrap content
| CSS files               | Layout           | Content      | Components   | Utilities            |
| ----------------------- | ---------------- | ------------ | ------------ | -------------------- |
| bootstrap.css           | included         | included     | included     | included             |
| bootstrap.min.css       | included         | included     | included     | included             |
| boostrap.grid.css       | only grid system | not inlcuded | not included | nolly flex utilities |
| boostrap.grid.min.css   | only grid system | not inlcuded | not included | nolly flex utilities |
| boostrap.reboot.css     | not included     | only reboot  | not included | not included         |
| boostrap.reboot.min.css | not included     | only reboot  | not included | not included         |

| JS files                | Popper       | jQuery       |
| ----------------------- | ------------ | ------------ |
| bootstap.js             | not included | not included |
| bootstap.min.js         | not included | not included |
| bootstrap.bundle.js     | included     | not included |
| bootstrap.bundle.min.js | included     | not included |

#### [⬆ Back to top][0.0]