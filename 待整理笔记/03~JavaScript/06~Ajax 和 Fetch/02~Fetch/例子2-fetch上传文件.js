// 通过HTML<input type="file" />元素，FormData() 和fetch()上传文件。
let formData = new FormData();
let fileField = document.querySelector("input[type='file']");

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
