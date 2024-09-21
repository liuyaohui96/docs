
## URL 完整格式
`<scheme>://<user>:<pwd>@<host>:<port>/<path>;<params>?<query>#<frag>`
    - `<shceme>`: http, https, ftp[, telnet]
    - host: 主机名
    - port： 端口号
            http是80端口，https是443端口
            FTP 21
            SSH 22 安全的远程登陆
            Telnet 23
            SMTP 25 邮件传输
            DNS 53
            POP3 110 邮件接收
    - user:pwd  在访问特定资源时用到，一般是ftp采用
    - `<params>` 某些方案使用，用`key/pair`形式, ; 分隔
    - `?<query>` 查询字符串，使用？与其他组件分隔
    - `#<frag>` 片段,所谓的描点
