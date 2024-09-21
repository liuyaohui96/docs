
## Navigaor对象属性-浏览器信息
1. Navigator.appCodeName 由于考虑到兼容性，基本所有都会返回"Mozilla"
2. Navigator.appName 由于考虑到兼容性，基本所有都会返回"Netscape"
3. Navigator.appVersion 返回代表有关浏览器版本信息的字符串。
4. NavigatorID.userAgent 只读属性返回当前浏览器的用户代理字符串。基于检测用户代理字符串的浏览器识别是不可靠的，因此不建议使用，因为用户代理字符串是用户可配置的
    ```js
    // 用户代理分解
    userAgent = appCodeName/appVersion number (Platform; Security; OS-or-CPU; 
    Localization; rv: revision-version-number) product/productSub 
    Application-Name Application-Name-version
    ```

5. Navigator.product 始终返回"Gecko"


6. NavigatorLanguage.language  只读属性，返回一个字符串表示用户的首选语言，通常是浏览器UI的语言。例如`"zh-CN"`
7. Navigator.onLine,返回浏览器的在线状态。该属性返回一个布尔值，其中true表示在线，false表示离线。
