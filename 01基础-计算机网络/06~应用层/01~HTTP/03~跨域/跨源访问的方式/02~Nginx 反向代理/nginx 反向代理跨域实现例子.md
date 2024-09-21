
## 例子i
A网站向B网站请求某个接口


例如nginx的端口号为 8090，需要请求的服务器端口号为 3000。（localhost:8090 请求 localhost:3000/say）

```js
server {
    listen       8090;

    server_name  localhost;

    location / {
        root   /Users/liuyan35/Test/Study/CORS/1-jsonp;
        index  index.html index.htm;
    }
    location /say {
        rewrite  ^/say/(.*)$ /$1 break;
        proxy_pass   http://localhost:3000;
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    }
    # others
}
```

## api
```shell
location / {
   # 检查域名后缀
    add_header Access-Control-Allow-Origin xx.xx.com;
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
    add_header Access-Control-Allow-Credentials true;
    add_header Access-Control-Allow-Headers DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type;
    add_header Access-Control-Max-Age 86400;
}
```