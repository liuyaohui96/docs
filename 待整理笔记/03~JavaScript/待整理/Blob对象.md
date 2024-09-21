BLOB对象表示一个类似文件的不可变原始数据对象. File接口基于Blob，继承了Blob的功能,并且扩展支持了用户计算机上的本地文件
```JS
Blob(blobParts[, options])
// Returns a newly created Blob object

// The size, in bytes, of the data contained in the Blob object.
Blob.size 

// A string indicating the MIME type of the data contained in the Blob.
Blob.type 

// e.g
var debug = {hello: "world"};
var blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
```