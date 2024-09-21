```JavaScript
const fs=require('fs');

fs.readdir('./', (err, files) =>{
    if(err) console.log('err', err);
    else     console.log('files', files);
})

```