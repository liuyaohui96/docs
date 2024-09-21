
## path.basename()
path.basename(path[, ext])

1. arguments
  * path `<string>`
  * ext `<string>`
  * return `<string>`
```js
path.basename('/foo/bar/baz/asdf/quux.html');
// Returns: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// Returns: 'quux'
```