let formData = new FormData();
let photos = document.querySelector("input[type='file'][multiple]");

formData.append('title', 'My Vegas Vacation');
// formData 只接受文件、Blob 或字符串，不能直接传数组，所以必须循环嵌入
for (let i = 0; i < photos.files.length; i++) {
  formData.append('photo', photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData
})
  .then(response => response.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
