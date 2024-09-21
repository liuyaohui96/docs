
## Navigator对象属性-其他
1. Navigator.cookieEnabled 只读属性，返回一个布尔值，该值指示是否启用cookie
2. Navigator.geolocation 返回一个 Geolocation 对象，通过这个对象可以访问到设备的位置信息。使网站或应用可以根据用户的位置提供个性化结果。注意，出于安全考虑，当网页请求获取用户位置信息时，用户会被提示进行授权。注意不同浏览器在请求权限时有不同的策略和方式。Windows10在未开启定位的情况下无法获取位置。
3. Navigator.keyboard 返回一个Keyboard对象，该对象提供对以下功能的访问：检索键盘布局图和切换从物理键盘捕获按键的功能