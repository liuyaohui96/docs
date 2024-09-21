
## Nginx反向代理
类似于Node中间件代理，需要搭建一个中转nginx服务器，用于转发请求

使用nginx反向代理实现跨域，是最简单的跨域方式。只需要修改nginx的配置即可解决跨域问题，支持所有浏览器，支持session，不需要修改任何代码，并且不会影响服务器性能

## 实现思路
通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录

1. 先下载nginx，然后将nginx目录下的nginx.conf修改如下:
    ```shell
    # proxy服务器
    server {
        listen       80;
        server_name  www.domain1.com;
        location / {
            proxy_pass   http://www.domain2.com:8080;  #反向代理
            proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
            index  index.html index.htm;

            # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
            add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
            add_header Access-Control-Allow-Credentials true;
        }
    }
    ```

2. 最后通过命令行nginx -s reload启动nginx

