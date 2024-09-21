## Content-Disposition
Content-Disposition 是 response header，表示回复的内容该以何种形式展示，是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地。

在multipart/form-data类型的应答消息体中， Content-Disposition 消息头可以被用在multipart消息体的子部分中，用来给出其对应字段的相关信息。各个子部分由在Content-Type 中定义的分隔符分隔

```shell
# 表示回复中的消息体会以页面的一部分或者整个页面的形式展示
Content-Disposition: inline

# 意味着消息体应该被下载到本地；大多数浏览器会呈现一个“保存为”的对话框，
# 将filename的值预填为下载后的文件名，假如它存在的话
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"

Content-Disposition: form-data
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

触发"保存为"对话框:这个简单的HTML文件会被下载到本地而不是在浏览器中展示。大多数浏览器默认会建议将cool.html作为文件名。
```shell
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 22

<HTML>Save me!</HTML>
```


以下是一个HTML表单的示例，展示了在 multipart/form-data format 格式的报文中使用Content-Disposition 消息头的情况

```shell
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```