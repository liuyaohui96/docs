文档参考：https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html

小程序内进行搜索，开发者可以通过 sitemap.json 配置来配置其小程序页面是否允许微信索引

如果没有 sitemap.json ，则默认为所有页面都允许被索引
只有一个rules数组配置项

## rules的配置
1. action： allow|disallow
2. page 路径
3. params
4. matching: exact | inclusive | exclusive | partial
5. 