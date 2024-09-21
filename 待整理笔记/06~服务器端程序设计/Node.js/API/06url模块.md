
## url.parse()
url.parse(urlString[, parseQueryString[, slashesDenoteHost]])

1. desctiption: takes a URL string, parses it, and returns a URL object

2. arguments
  * urlString
  * parseQueryString Default: false
    *  If true, the query property will always be set to an object 
  * slashesDenoteHost, Default: false.
    * If true, the first token after the literal string // and preceding the next / will be interpreted as the host

```js
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
```

